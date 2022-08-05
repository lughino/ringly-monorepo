import * as React from 'react';
import { Kind_Cta_Enum } from 'src/client';
import type { LoaderDataCta } from 'src/types';
import { kindClasses } from '../styles';

interface Props {
  style: LoaderDataCta['cta']['attributes']['style'];
  message: LoaderDataCta['cta']['attributes']['message'];
  text: LoaderDataCta['cta']['attributes']['text'];
  url: LoaderDataCta['cta']['attributes']['url'];
  kind: Kind_Cta_Enum;
}

export const TextSection: React.FC<Props> = ({ style, message, text, url, kind }) => {
  const kindStyles = React.useMemo(
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
  );
};
