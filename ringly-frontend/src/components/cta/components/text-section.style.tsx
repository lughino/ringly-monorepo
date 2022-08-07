import { useFetcher } from '@remix-run/react';
import * as React from 'react';
import { Kind_Cta_Enum } from 'src/client';
import type { CtaDataButton, CtaDataForm } from 'src/types';
import { kindClasses } from '../styles';

interface Props {
  ctaAttributes: CtaDataButton['attributes'] | CtaDataForm['attributes'];
  kind: Kind_Cta_Enum;
  ctaId: string;
  linkId: string;
}

export const TextSection: React.FC<Props> = ({ ctaAttributes, kind, ctaId, linkId }) => {
  const fetcher = useFetcher();
  const { style } = ctaAttributes;
  const ref = React.useRef<HTMLFormElement>(null);
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
      [Kind_Cta_Enum.Image]: {},
    }),
    [style],
  );

  React.useEffect(() => {
    if (fetcher.type === 'done' && fetcher.data.ok) {
      ref.current?.reset();
    }
  }, [fetcher]);

  return (
    <div className="flex items-center">
      <span style={{ color: style.textColor }} className="font-normal align-middle">
        {ctaAttributes.message}
      </span>
      {kind === Kind_Cta_Enum.Form && 'placeholderText' in ctaAttributes ? (
        <fetcher.Form ref={ref} method="post" action="/marketing/capture" className="ml-10">
          <div className="flex">
            <input type="hidden" name="ctaId" value={ctaId} />
            <input type="hidden" name="linkId" value={linkId} />
            <input
              id="marketing-email"
              className="rounded-none rounded-l-lg bg-gray-50 border text-gray-900 focus:ring-grey-500 focus:border-gray-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2"
              type="email"
              name="marketingEmail"
              placeholder={ctaAttributes.placeholderText}
              autoComplete="off"
              required
            />
            <button
              type="submit"
              disabled={fetcher.state === 'submitting'}
              style={{
                backgroundColor: style.buttonColor,
                color: style.buttonTextColor,
                border: `1px solid ${style.buttonColor}`,
              }}
              className="inline-flex items-center px-3 text-sm rounded-r-md border border-l-0"
            >
              {fetcher.state === 'submitting' ? (
                <svg
                  aria-hidden="true"
                  role="status"
                  className="inline w-4 h-4 text-gray-200 animate-spin"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#828a99"
                  />
                </svg>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          </div>
        </fetcher.Form>
      ) : 'url' in ctaAttributes ? (
        <a
          style={kindStyles[kind]}
          className={`h-9 w-auto min-w-[80px] ml-4 py-0 whitespace-nowrap cursor-pointer leading-8 font-normal text-center ${kindClasses[kind]}`}
          href={ctaAttributes.url}
          target="_blank"
          rel="noreferrer"
        >
          {ctaAttributes.text}
        </a>
      ) : null}
    </div>
  );
};
