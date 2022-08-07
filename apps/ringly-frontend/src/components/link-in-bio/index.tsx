import * as R from 'ramda';
import type { LoaderDataLinkInBio } from 'src/types';
import { Helmet } from '../helmet';
import { ClassicLayout, ProLayout, HeroLayout, FrameLayout } from './components/layout';

interface Props {
  data: LoaderDataLinkInBio;
}

export function LinkInBio({ data: { link } }: Props) {
  const {
    attributes: { profile, font, page },
  } = link;
  const Layout = R.cond([
    [R.equals('frame'), R.always(FrameLayout)],
    [R.equals('pro'), R.always(ProLayout)],
    [R.equals('hero'), R.always(HeroLayout)],
    [R.equals('classic'), R.always(ClassicLayout)],
  ])(page.layout);

  return (
    <>
      <Helmet>
        <title>{profile.title} - Link-in-bio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""></link>
        {font.family && (
          <link
            href={`https://fonts.googleapis.com/css2?family=${font.family.replace(
              '_',
              '+',
            )}&amp;display=swap`}
            rel="stylesheet"
          />
        )}
      </Helmet>
      <div className={`flex h-screen flex-col w-full font-['${font.family}'] relative`}>
        <Layout data={{ link }} />
      </div>
    </>
  );
}
