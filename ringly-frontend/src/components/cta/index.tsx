import type { LoaderDataCta } from 'src/types';
import { Helmet } from '../helmet';
import { CtaBanner } from './components/cta-banner';

interface Props {
  data: LoaderDataCta;
}

export function Cta({ data: { link, cta } }: Props) {
  const {
    attributes: { destinationLinkMetadata },
    destinationLink,
  } = link;

  return (
    <>
      <Helmet>
        <title>{destinationLinkMetadata.title.text}</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600"
          rel="stylesheet"
          type="text/css"
        />
        {destinationLinkMetadata.meta.map((meta, i) => (
          <meta key={`meta-${i}`} {...meta} />
        ))}
        {destinationLinkMetadata.favicon.map((link, i) => (
          <link key={`link-${i}`} {...link} />
        ))}
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <iframe
        src={destinationLink!}
        className="absolute left-0 top-0 right-0 bottom-0 w-full h-full min-w-full min-h-full border-none border-0 overflow-x-auto"
        // @ts-ignore
        style={{ WebkitOverflowScrolling: 'touch' }}
        title="ContentFrame"
      ></iframe>
      <CtaBanner cta={cta} />
    </>
  );
}
