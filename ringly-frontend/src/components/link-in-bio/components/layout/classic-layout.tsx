import type { LoaderDataLinkInBio } from 'src/types';
import { BioImage } from '../bio-image';
import { BioLinks } from '../bio-links';
import { BrandLogo } from '../logo';

interface Props {
  data: LoaderDataLinkInBio;
}

export const ClassicLayout: React.FC<Props> = ({ data: { link } }) => {
  const {
    attributes: { profile, page, buttons, links, hideRinglyLogo },
  } = link;
  return (
    <>
      <div
        style={{
          background: page.styles.backgroundColor,
        }}
        className="h-screen flex flex-col justify-center items-center"
      >
        <main className="container relative flex flex-col px-4 max-w-2xl my-0 mx-auto flex-1">
          <header className="mb-4 text-center pt-10">
            <BioImage url={profile.image.url} />
            <h1 style={{ color: page.styles.titleColor }} className="text-2xl font-bold mx-4 my-2">
              {profile.title}
            </h1>
            {profile.description && (
              <div className="mx-4 mt-4">
                <p style={{ color: page.styles.descriptionColor }}>{profile.description}</p>
              </div>
            )}
          </header>
          <BioLinks links={links} buttons={buttons} />
          {!hideRinglyLogo && <BrandLogo />}
        </main>
      </div>
    </>
  );
};
