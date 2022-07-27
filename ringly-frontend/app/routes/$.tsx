import type { LoaderFunction } from '@remix-run/node';
import { json, redirect } from '@remix-run/node';
import * as R from 'ramda';
import { gqlSdk, Kind_Enum } from 'src/client';
import { useLoaderData } from '@remix-run/react';
import { LinkInBio } from 'src/components/link-in-bio';
import type {
  DataLink,
  LoaderDataLinkInBio,
  LinkInBioLink,
  LinkInBio as LinkInBioType,
  LoaderDataRedirect,
} from 'src/types';

const appendParams = R.cond([
  [R.includes('?'), (link: string, params: string): string => `${link}&${params}`],
  [R.complement(R.includes('?')), (link: string, params: string): string => `${link}?${params}`],
]);

type LoaderData = LoaderDataLinkInBio | LoaderDataRedirect;

const redirectAction = async (linkFound: DataLink, params: string) => {
  const destLink = linkFound.variablePassing
    ? appendParams(linkFound.destinationLink!, params)
    : linkFound.destinationLink!;

  return redirect(destLink, {
    status: (linkFound as LoaderDataRedirect['link']).attributes.code || 301,
  });
};
const dynamicLinkAction = async (linkFound: DataLink, params: string) =>
  new Response('Dynamic link');
const linkInBioAction = async (linkFound: LinkInBioType, params: string) => {
  const getIds = R.pipe<[LinkInBioLink[]], LinkInBioLink[], string[]>(
    R.filter<LinkInBioLink>(
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
    (link) => R.mergeRight(link, groupedLinks[link.id][0]),
    linkFound.attributes.links,
  );
  const link = R.assocPath(['attributes', 'links'], augmentedLinks, linkFound);

  return json({ link });
};
const ctaAction = async (linkFound: DataLink, params: string) => new Response('CTA');
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
      R.either(R.propEq('kind', Kind_Enum.TempRedirect), R.propEq('kind', Kind_Enum.PermRedirect)),
      redirectAction,
    ],
    [R.propEq('kind', Kind_Enum.Dynamic), dynamicLinkAction],
    [R.propEq('kind', Kind_Enum.LinkInBio), linkInBioAction],
    [R.propEq('kind', Kind_Enum.Cta), ctaAction],
    [R.propEq('kind', Kind_Enum.DeepLink), mobileDeepLinkAction],
  ]);

  const response = await execAction(link[0], searchParams.toString());
  if (response) {
    return response;
  }

  throw new Response('System Error', { status: 500 });
};

export default function CatchAll() {
  const data = useLoaderData<LoaderData>();

  if (data.link.kind === Kind_Enum.LinkInBio) {
    return <LinkInBio data={data as LoaderDataLinkInBio} />;
  }

  return (
    <div className="grid h-screen place-items-center">
      <div>
        <h1 className="text-3xl font-bold underline">Catch All</h1>
        <code>{JSON.stringify(data, null, 2)}</code>
      </div>
    </div>
  );
}
