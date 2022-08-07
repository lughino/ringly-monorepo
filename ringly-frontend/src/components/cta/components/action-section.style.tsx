import * as React from 'react';
import type { LoaderDataCta } from 'src/types';

interface Props {
  style: LoaderDataCta['cta']['attributes']['style'];
  clickLogo: () => void;
  closeBanner: (e: React.MouseEvent) => void;
}

export const ActionSection: React.FC<Props> = ({ style, clickLogo, closeBanner }) => {
  const textColorStyle = 'textColor' in style ? { color: style.textColor } : {};
  return (
    <div className="flex justify-start">
      {!style.hideRinglyLogo && (
        <a
          style={textColorStyle}
          onClick={clickLogo}
          className="px-1 cursor-pointer opacity-60"
          href="https://ringly.com?utm_campaign=ringlylogo"
          target="_blank"
          rel="noreferrer"
        >
          <div className="bg-no-repeat bg-[url('https://ffb2efd5105ff0aedbc9-9cdacdeebf0faa19b665bf427f0c8092.ssl.cf1.rackcdn.com/img/logo_122x33.png')] bg-[length:100%] sm:w-12 sm:h-3 sm:mt-1"></div>
        </a>
      )}
      <a
        style={textColorStyle}
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
        style={textColorStyle}
        href="#close"
        onClick={closeBanner}
        className="px-1 opacity-40 cursor-pointer w-5 mt-[3px]"
      >
        <svg className="w-4/6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
        </svg>
      </a>
    </div>
  );
};
