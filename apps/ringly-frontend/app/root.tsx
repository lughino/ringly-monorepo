import type { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import styles from './styles/app.css';
import type { EnvVariables } from '@ringly/environment';
import { EnvContext } from '@ringly/environment';

export const links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }];
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Ring.ly',
  viewport: 'width=device-width,initial-scale=1',
});

export const loader: LoaderFunction = async () => {
  return json({
    ENV: {
      DEFAULT_DOMAIN_URL: process.env.DEFAULT_DOMAIN_URL,
    },
  });
};

export default function App() {
  const data = useLoaderData<{ ENV: EnvVariables }>();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <meta data-hm="link" />
        <meta data-hm="meta" />
        <meta data-hm="script" />
      </head>
      <body className="antialiased">
        <EnvContext.Provider value={data.ENV}>
          <Outlet />
        </EnvContext.Provider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
