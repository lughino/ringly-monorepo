import type { LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import * as R from 'ramda';
import { useLoaderData } from '@remix-run/react';
import type { TypedResponse } from '@remix-run/react/dist/components';
import { gqlSdk, Kind_Link_Enum } from 'src/client';
import { LinkInBio } from 'src/components/link-in-bio';
import type {
  DataLink,
  LoaderDataLinkInBio,
  LinkInBioLink,
  LinkInBioAttributesLink,
  LoaderDataRedirect,
  LoaderDataCta,
  RedirectLink,
  CtaLink,
} from 'src/types';
import { generateUTMUrl, updateLinkMetadata } from 'src/utils';
import { Cta } from 'src/components/cta';

const appendParams = R.cond([
  [R.includes('?'), (link: string, params: string): string => `${link}&${params}`],
  [R.complement(R.includes('?')), (link: string, params: string): string => `${link}?${params}`],
]);

type LoaderData = LoaderDataLinkInBio | LoaderDataRedirect | LoaderDataCta;

const redirectAction = async (linkFound: RedirectLink, params: string) => {
  let destLink =
    linkFound.variablePassing && params
      ? appendParams(linkFound.destinationLink!, params)
      : linkFound.destinationLink!;

  if (linkFound.add_utm) {
    destLink = generateUTMUrl(destLink, linkFound.brand?.utm!);
  }

  return redirect(destLink, {
    status: (linkFound as LoaderDataRedirect['link']).attributes.code || 301,
  });
};

const dynamicLinkAction = async (linkFound: DataLink, params: string) =>
  new Response('Dynamic link');

const linkInBioAction = async (linkFound: LinkInBioLink, params: string) => {
  const getIds = R.pipe<[LinkInBioAttributesLink[]], LinkInBioAttributesLink[], string[]>(
    R.filter<LinkInBioAttributesLink>(
      (link) =>
        (R.isNil(link.schedule.startDate)
          ? true
          : R.lte(new Date(link.schedule.startDate).getTime(), Date.now())) &&
        (R.isNil(link.schedule.endDate)
          ? true
          : R.gte(new Date(link.schedule.endDate!).getTime(), Date.now())),
    ),
    R.map(R.prop('id')),
  );
  const ids = getIds(linkFound.attributes.links);
  const { link: links } = await gqlSdk.getLinksByPk({ ids });
  const groupedLinks = R.groupBy(R.prop('id'), links);
  const augmentedLinks = R.map(
    // @ts-ignore
    (link) => R.mergeRight(link, groupedLinks[link.id]?.[0]),
    R.filter((link) => ids.includes(link.id), linkFound.attributes.links),
  );
  const link = R.assocPath(['attributes', 'links'], augmentedLinks, linkFound);

  return json({ link });
};

const ctaAction = async (linkFound: CtaLink, params: string) => {
  const { cta_by_pk } = await gqlSdk.getCtaById({ id: linkFound.cta_id! });
  updateLinkMetadata(linkFound);

  return json({
    link: linkFound,
    cta: cta_by_pk,
  });
};

const mobileDeepLinkAction = async (linkFound: DataLink, params: string) =>
  new Response('Mobile Deep link');

export const loader: LoaderFunction = async ({ params, request }) => {
  const shortLink = params['*'];
  const { hostname, searchParams } = new URL(request.url);

  const { link } = await gqlSdk.getLinkByShortLink({ shortLink });

  if (!link.length) {
    throw new Response('Not found', { status: 404 });
  }

  const execAction = R.cond([
    [
      R.either(
        R.propEq('kind', Kind_Link_Enum.TempRedirect),
        R.propEq('kind', Kind_Link_Enum.PermRedirect),
      ),
      redirectAction,
    ],
    [R.propEq('kind', Kind_Link_Enum.Dynamic), dynamicLinkAction],
    // @ts-ignore
    [R.propEq('kind', Kind_Link_Enum.LinkInBio), linkInBioAction],
    // @ts-ignore
    [R.propEq('kind', Kind_Link_Enum.Cta), ctaAction],
    [R.propEq('kind', Kind_Link_Enum.DeepLink), mobileDeepLinkAction],
  ]);

  const response = (await execAction(
    link[0],
    // @ts-ignore
    searchParams.toString(),
  )) as LoaderData | TypedResponse<never>;
  if (response) {
    return response;
  }

  throw new Response('System Error', { status: 500 });
};

export default function CatchAll() {
  const data = useLoaderData<LoaderData>();

  const NotFound = (
    <div className="grid h-screen place-items-center">
      <div>
        <h1 className="text-3xl font-bold underline">Catch All</h1>
        <code>{JSON.stringify(data, null, 2)}</code>
      </div>
    </div>
  );

  const Component = R.cond([
    [R.equals(Kind_Link_Enum.LinkInBio), R.always(LinkInBio)],
    // @ts-ignore
    [R.equals(Kind_Link_Enum.Cta), R.always(Cta)],
    // @ts-ignore
    [R.T, R.always(NotFound)],
  ])(data?.link?.kind) as React.ComponentType<any>;

  return <Component data={data} />;
}
