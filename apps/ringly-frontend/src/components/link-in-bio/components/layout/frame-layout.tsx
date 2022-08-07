import type { LoaderDataLinkInBio } from 'src/types';
import { BioImage } from '../bio-image';
import { BioLinks } from '../bio-links';
import { BrandLogo } from '../logo';

interface Props {
  data: LoaderDataLinkInBio;
}

export const FrameLayout: React.FC<Props> = ({ data: { link } }) => {
  const {
    attributes: { profile, page, buttons, links, hideRinglyLogo },
  } = link;
  return (
    <>
      <div
        style={{
          background: page.styles.backgroundColor,
        }}
        className="h-1/4 flex flex-col justify-center items-center m-3 rounded-3xl"
      >
        <BioImage url={profile.image.url} />
        <h1 style={{ color: page.styles.titleColor }} className="text-2xl font-bold m-4">
          {profile.title}
        </h1>
      </div>
      <main className="container relative flex flex-col px-4 max-w-2xl my-0 mx-auto flex-1">
        {profile.description && (
          <header className="mt-3 mb-6 flex justify-center">
            <p style={{ color: page.styles.descriptionColor }}>{profile.description}</p>
          </header>
        )}
        <BioLinks links={links} buttons={buttons} />
        {!hideRinglyLogo && <BrandLogo />}
      </main>
    </>
  );
};
