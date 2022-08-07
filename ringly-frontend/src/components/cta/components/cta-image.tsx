import type { MouseEvent } from 'react';
import type { Kind_Cta_Enum } from 'src/client';
import type { CtaDataImage } from 'src/types';
import { positionClasses } from '../styles';
import { ActionSection } from './action-section.style';

interface Props {
  cta: CtaDataImage;
  kind: Kind_Cta_Enum;
  closeBanner: (e: MouseEvent) => void;
  clickLogo: () => void;
}

export function CtaImage({
  cta: {
    attributes: { style, url, imageUrl },
  },
  clickLogo,
  closeBanner,
}: Props) {
  return (
    <div
      className={`fixed w-auto opacity-100 border-0 bg-transparent rounded-none shadow-none cursor-auto m-auto min-w-0 min-h-0 outline-0 p-0 pointer-events-auto font-['Open_Sans'] ${
        positionClasses[style.position]
      }`}
    >
      <div className="flex justify-start items-center p-2 rounded-[50px] relative">
        <a
          href={url}
          title="image"
          target="_blank"
          className="border-none pointer-events-auto shadow-none rounded-[50px] outline-none"
          rel="noreferrer"
        >
          <img className="w-full h-full object-cover rounded-[50px]" src={imageUrl} alt="banner" />
        </a>
        <div className="absolute top-4 right-8 bg-white rounded-md py-0.5 opacity-80 hover:opacity-100">
          <ActionSection style={style} clickLogo={clickLogo} closeBanner={closeBanner} />
        </div>
      </div>
    </div>
  );
}
