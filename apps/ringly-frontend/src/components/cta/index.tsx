import type { LoaderDataCta } from 'src/types';
import { Helmet } from '../helmet';
import { CtaBanner } from './components/cta-banner';

interface Props {
  data: LoaderDataCta;
}

const getFullWidthStyle = (style: LoaderDataCta['cta']['attributes']['style']) => {
  switch (style.position) {
    case 'top-full-width':
      return {
        top: '52.5px !important',
        height: 'calc(100% - 52.5px) !important',
        minHeight: 'calc(100% - 52.5px) !important',
      };
    case 'bottom-full-width':
      return {
        bottom: '52.5px !important',
        height: 'calc(100% - 52.5px) !important',
        minHeight: 'calc(100% - 52.5px) !important',
      };
    default:
      return null;
  }
};

export function Cta({ data: { link, cta } }: Props) {
  const {
    attributes: { destinationLinkMetadata },
    destinationLink,
  } = link;
  const fullWidthStyle =
    'theme' in cta.attributes.style && cta.attributes.style.theme === 'full-width'
      ? getFullWidthStyle(cta.attributes.style)
      : null;

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
        style={{ WebkitOverflowScrolling: 'touch', ...fullWidthStyle }}
        title="SiteFrame"
      ></iframe>
      <CtaBanner cta={cta} linkId={link.id} />
    </>
  );
}
