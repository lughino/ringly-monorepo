import type { MouseEvent } from 'react';
import type { LoaderDataCta } from 'src/types';
import type { Kind_Cta_Enum } from 'src/client';
import { positionClasses } from '../styles';
import { ActionSection } from './action-section.style';
import { TextSection } from './text-section.style';

interface Props {
  cta: LoaderDataCta['cta'];
  kind: Kind_Cta_Enum;
  closeBanner: (e: MouseEvent) => void;
  clickLogo: () => void;
}

export function CtaButton({
  cta: {
    attributes: { style, message, text, url },
    brand,
  },
  kind,
  closeBanner,
  clickLogo,
}: Props) {
  if (style.theme === 'full-width') {
    return (
      <div
        className={`fixed w-auto opacity-100 border-0 bg-transparent rounded-none shadow-none cursor-auto m-auto min-w-0 min-h-0 outline-0 p-0 pointer-events-auto font-['Open_Sans'] ${
          positionClasses[style.position]
        }`}
      >
        <div
          style={{
            backgroundColor: style.backgroundColor,
            color: style.textColor,
          }}
          className="flex justify-start items-center"
        >
          <div className="flex">
            <a
              className="border-none pointer-events-auto shadow-none outline-none"
              href={brand.url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-14 object-cover bg-white border-none"
                src={brand.image_url ?? 'default-logo.png'}
                alt={brand.name}
              />
            </a>
          </div>
          <div className="flex relative h-12 ml-2 justify-between items-center mr-1 w-full">
            <div className="flex justify-between">
              <a
                target="_blank"
                rel="noreferrer"
                href={brand.url}
                className="text-left opacity-60 overflow-hidden whitespace-nowrap uppercase text-sm leading-5"
              >
                {brand.name}
              </a>
            </div>
            <TextSection message={message} text={text} url={url} style={style} kind={kind} />
            <ActionSection style={style} clickLogo={clickLogo} closeBanner={closeBanner} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed w-auto opacity-100 border-0 bg-transparent rounded-none shadow-none cursor-auto m-auto min-w-0 min-h-0 outline-0 p-0 pointer-events-auto font-['Open_Sans'] ${
        positionClasses[style.position]
      }`}
    >
      <div
        style={{
          backgroundColor: style.backgroundColor,
          color: style.textColor,
        }}
        className="flex justify-start items-center p-2 rounded-[50px]"
      >
        <div className="flex">
          <a
            className="border-none pointer-events-auto shadow-none rounded-[50px] outline-none"
            href={brand.url}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="w-20 h-20 rounded-[50px] object-cover bg-white border-none"
              src={brand.image_url ?? 'default-logo.png'}
              alt={brand.name}
            />
          </a>
        </div>
        <div className="flex flex-col relative h-20 ml-2 p-1 justify-between mr-5">
          <div className="flex justify-between">
            <a
              target="_blank"
              rel="noreferrer"
              href={brand.url}
              className="text-left opacity-60 overflow-hidden whitespace-nowrap uppercase text-xs leading-5"
            >
              {brand.name}
            </a>
            <ActionSection style={style} clickLogo={clickLogo} closeBanner={closeBanner} />
          </div>
          <TextSection message={message} text={text} url={url} style={style} kind={kind} />
        </div>
      </div>
    </div>
  );
}
