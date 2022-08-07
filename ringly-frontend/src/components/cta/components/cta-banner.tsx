import type { MouseEvent } from 'react';
import { useState } from 'react';
import type { CtaDataButton, CtaDataForm, CtaDataImage, LoaderDataCta } from 'src/types';
import { Kind_Cta_Enum } from 'src/client';
import { CtaButton } from './cta-button';
import { CtaImage } from './cta-image';

interface Props {
  cta: LoaderDataCta['cta'];
  linkId: string;
}

export function CtaBanner({ cta, linkId }: Props) {
  const [isBannerClosed, setBannerToClose] = useState(false);
  const closeBanner = (e: MouseEvent) => {
    e.preventDefault();
    setBannerToClose(true);
  };
  const clickLogo = () => {
    console.log('logo clicked!');
  };

  if (isBannerClosed) {
    return null;
  }

  if (
    cta.kind === Kind_Cta_Enum.Button ||
    cta.kind === Kind_Cta_Enum.Text ||
    cta.kind === Kind_Cta_Enum.Form
  ) {
    return (
      <CtaButton
        cta={cta as CtaDataButton | CtaDataForm}
        kind={cta.kind}
        closeBanner={closeBanner}
        clickLogo={clickLogo}
        linkId={linkId}
      />
    );
  } else if (cta.kind === Kind_Cta_Enum.Image) {
    return (
      <CtaImage
        cta={cta as CtaDataImage}
        kind={cta.kind}
        closeBanner={closeBanner}
        clickLogo={clickLogo}
      />
    );
  } else if (cta.kind === Kind_Cta_Enum.Hidden) {
    return null;
  }

  return null;
}
