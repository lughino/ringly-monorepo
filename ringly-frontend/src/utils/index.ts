import https from 'https';
import * as R from 'ramda';
import { parse } from 'node-html-parser';
import type { HTMLElement } from 'node-html-parser';
import type { CtaMetaData, CtaLink } from 'src/types';
import type { Utm } from 'src/client';
import { gqlSdk } from 'src/client';

export const isServer = (): boolean => typeof document === 'undefined';

export const renderServer = <R extends unknown>(toRender: R): R | null =>
  isServer() ? toRender : null;

/**
 * It returns the first parameter passed to the function if the environment is the `server`, the second parameter if the environment is the `client`.
 *
 */
export const renderCond = <I extends unknown, E extends unknown>(
  serverRend: I,
  clientRend: E,
): I | E => (isServer() ? serverRend : clientRend);

export const TITLE_REGEX = /<title.*>(.*)<\/title>/gi;
const metadataWhitelist = [
  'twitter:image',
  'twitter:card',
  'twitter:site',
  'twitter:creator',
  'twitter:title',
  'twitter:description',
  'og:title',
  'og:description',
  'og:image',
  'og:image:url',
  'og:image:secure_url',
  'og:image:type',
  'og:image:alt',
  'og:image:width',
  'og:image:height',
  'og:url',
  'og:type',
  'og:site_name',
  'og:locale',
  'og:locale:alternate',
  'og:audio',
  'og:determiner',
  'og:video',
  'og:video:url',
  'og:video:secure_url',
  'og:video:type',
  'og:video:width',
  'og:video:height',
];
const constructMeta = R.pipe<[HTMLElement[]], HTMLElement[], Record<string, string>[]>(
  R.filter((meta: HTMLElement) => R.any(R.includes(R.__, meta.rawAttrs), metadataWhitelist)),
  // @ts-ignore
  R.pluck('attributes'),
);
const constructTitle = R.pick(['text']);
const constructFavicon = R.curry((htmlEl: HTMLElement[], origin: string) =>
  R.pipe(
    // @ts-ignore
    R.pluck('attributes'),
    R.map((node: HTMLElement['attributes']) => ({
      ...node,
      href: `${origin.replace(/\/$/, '')}/${node.href.replace(/^\//, '')}`,
    })),
  )(htmlEl),
);

export const getURLMetadata = async (url: string): Promise<CtaMetaData> => {
  let rawHeader = await new Promise<string>((resolve, reject) => {
    const req = https.request(url, (res) => {
      res.setEncoding('utf8');
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
        if (chunk.includes('</head>')) {
          resolve(body);
          res.destroy();
        }
      });
      res.on('end', () => resolve(body));
    });
    req.on('error', (err) => reject(err));
    req.end();
  });
  const startHeader = rawHeader.indexOf('<head>');
  const endHeader = rawHeader.indexOf('</head>');
  rawHeader = rawHeader.substring(startHeader, endHeader + 7);
  const parsedHeader = parse(rawHeader).childNodes[0] as HTMLElement;

  const baseUrl = new URL(url);
  const meta = constructMeta(parsedHeader.querySelectorAll('meta'));
  const title = constructTitle(parsedHeader.querySelector('title')?.childNodes[0]) as {
    text: string;
  };
  const favicon = constructFavicon(
    parsedHeader.querySelectorAll('link[rel*="icon"]'),
    baseUrl.origin,
  ) as Record<string, string>[];

  return { meta, title, favicon, lastUpdate: new Date() };
};

const EXPIRE_METADATA_TIME = 1000 * 60 * 60 * 24;
const isDataExpired = R.gt(R.__, Date.now() + EXPIRE_METADATA_TIME);

export const updateLinkMetadata = async (
  link: CtaLink,
): Promise<
  Awaited<ReturnType<typeof gqlSdk.updateLinkAttributes>>['update_link_by_pk'] | undefined
> => {
  const date = new Date(link.attributes.destinationLinkMetadata.lastUpdate).getTime();
  if (isDataExpired(date)) {
    const meta = await getURLMetadata(link.destinationLink!);
    const { id } = link;
    const data = await gqlSdk.updateLinkAttributes({
      id,
      attributes: { destinationLinkMetadata: meta },
    });

    return data.update_link_by_pk;
  }
};

export const generateUTMUrl = (url: string, utmParams?: Partial<Utm>) => {
  if (!utmParams) {
    return url;
  }
  const { overridable = true, campaign, content, source, term, medium } = utmParams;
  const urlToSend = new URL(url);
  const currentParams = Object.fromEntries(urlToSend.searchParams.entries());
  const defaultParams = {
    ...(campaign && { utm_campaign: campaign }),
    ...(content && { utm_content: content }),
    ...(medium && { utm_medium: medium }),
    ...(source && { utm_source: source }),
    ...(term && { utm_term: term }),
  };
  const newParamsToSend = new URLSearchParams(
    overridable ? { ...defaultParams, ...currentParams } : { ...currentParams, ...defaultParams },
  ).toString();

  return new URL(`${urlToSend.origin}${urlToSend.pathname}?${newParamsToSend}`).toString();
};
