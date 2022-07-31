import { useMemo } from 'react';
import type { MouseEvent } from 'react';
import type { LoaderDataCta } from 'src/types';
import { Kind_Cta_Enum } from 'src/client';
import { positionClasses } from '../styles';

interface Props {
  cta: LoaderDataCta['cta'];
  kind: Kind_Cta_Enum;
  closeBanner: (e: MouseEvent) => void;
  clickLogo: () => void;
}

const kindClasses = {
  [Kind_Cta_Enum.Button]: 'px-4 border-2 border-solid  rounded-2xl',
  [Kind_Cta_Enum.Text]: 'underline',
  [Kind_Cta_Enum.Form]: '',
  [Kind_Cta_Enum.Hidden]: '',
};

export function CtaButton({
  cta: {
    attributes: { style, message, text, url },
    brand,
  },
  kind,
  closeBanner,
  clickLogo,
}: Props) {
  const kindStyles = useMemo(
    () => ({
      [Kind_Cta_Enum.Button]: {
        borderColor: style.buttonColor,
        backgroundColor: style.buttonColor,
        color: style.buttonTextColor,
      },
      [Kind_Cta_Enum.Text]: {
        color: style.buttonColor,
      },
      [Kind_Cta_Enum.Form]: {},
      [Kind_Cta_Enum.Hidden]: {},
    }),
    [style],
  );
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
            <div className="flex justify-start">
              {!style.hideRinglyLogo && (
                <a
                  style={{ color: style.textColor }}
                  onClick={clickLogo}
                  className="px-1 cursor-pointer opacity-60"
                  href="https://ringly.com?utm_campaign-ringlylogo"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="bg-no-repeat bg-[url('https://ffb2efd5105ff0aedbc9-9cdacdeebf0faa19b665bf427f0c8092.ssl.cf1.rackcdn.com/img/logo_122x33.png')] bg-[length:100%] sm:w-12 sm:h-3 sm:mt-1"></div>
                </a>
              )}
              <a
                style={{ color: style.textColor }}
                className="px-1 cursor-pointer opacity-40 w-5 mt-[3px]"
                href="/whats-this"
                target="_blank"
                rel="noreferrer"
              >
                <svg className="w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 400c-18 0-32-14-32-32s13.1-32 32-32c17.1 0 32 14 32 32S273.1 400 256 400zM325.1 258L280 286V288c0 13-11 24-24 24S232 301 232 288V272c0-8 4-16 12-21l57-34C308 213 312 206 312 198C312 186 301.1 176 289.1 176h-51.1C225.1 176 216 186 216 198c0 13-11 24-24 24s-24-11-24-24C168 159 199 128 237.1 128h51.1C329 128 360 159 360 198C360 222 347 245 325.1 258z" />
                </svg>
              </a>
              <a
                style={{ color: style.textColor }}
                href="#close"
                onClick={closeBanner}
                className="px-1 opacity-40 cursor-pointer w-5 mt-[3px]"
              >
                <svg className="w-4/6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <span style={{ color: style.textColor }} className="font-normal align-middle">
              {message}
            </span>
            <a
              style={kindStyles[kind]}
              className={`h-9 w-auto min-w-[80px] ml-4 py-0 whitespace-nowrap cursor-pointer leading-8 font-normal text-center ${kindClasses[kind]}`}
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              {text}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
