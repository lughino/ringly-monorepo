import * as R from 'ramda';
import type { MouseEvent } from 'react';
import { useState } from 'react';
import type { LoaderDataCta } from 'src/types';
import { Kind_Cta_Enum } from 'src/client';
import { CtaButton } from './cta-button';

interface Props {
  cta: LoaderDataCta['cta'];
}

export function CtaBanner({ cta }: Props) {
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

  const CtaComponent = R.cond([
    [
      R.equals(Kind_Cta_Enum.Button),
      R.always(() => (
        <CtaButton
          cta={cta}
          kind={Kind_Cta_Enum.Button}
          closeBanner={closeBanner}
          clickLogo={clickLogo}
        />
      )),
    ],
    [
      R.equals(Kind_Cta_Enum.Text),
      R.always(() => (
        <CtaButton
          cta={cta}
          kind={Kind_Cta_Enum.Text}
          closeBanner={closeBanner}
          clickLogo={clickLogo}
        />
      )),
    ],
    [
      R.equals(Kind_Cta_Enum.Form),
      R.always(() => (
        // TODO: implement form component
        <CtaButton
          cta={cta}
          kind={Kind_Cta_Enum.Form}
          closeBanner={closeBanner}
          clickLogo={clickLogo}
        />
      )),
    ],
    // @ts-ignore
    [R.equals(Kind_Cta_Enum.Text), R.always(() => null)],
  ])(cta.kind) as React.FC;

  return <CtaComponent />;
}
