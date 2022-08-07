import type { EntryContext } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import { renderToString } from 'react-dom/server';
import { helmetData } from '../src/components/helmet';
import { TITLE_REGEX } from 'src/utils';

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  let markup = renderToString(<RemixServer context={remixContext} url={request.url} />);
  const { helmet } = helmetData.context;
  const helmetTitle = helmet.title.toString().replace(TITLE_REGEX, '$1');
  if (helmetTitle) {
    markup = markup.replace(TITLE_REGEX, `<title>${helmetTitle}</title>`);
  }
  const helmetMeta = helmet.meta.toString();
  if (helmetMeta) {
    markup = markup.replace(/<meta data-hm="meta"\/>/, helmetMeta);
  }
  const helmetLink = helmet.link.toString();
  if (helmetLink) {
    markup = markup.replace(/<meta data-hm="link"\/>/, helmetLink);
  }
  const helmetScript = helmet.script.toString();
  if (helmetScript) {
    markup = markup.replace(/<meta data-hm="script"\/>/, helmetScript);
  }

  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
