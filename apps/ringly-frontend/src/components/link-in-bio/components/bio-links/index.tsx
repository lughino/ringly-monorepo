import * as R from 'ramda';
import { useEnvVariables } from '@ringly/environment';
import type { LoaderDataLinkInBio, LinkInBioButtons } from 'src/types';

const buttonShapesClasses = {
  'rounded-xl': 'rounded-3xl',
  'rounded-xl-outline': 'rounded-3xl',
  'rounded-sm': 'rounded-lg',
  'rounded-sm-outline': 'rounded-lg',
  squared: 'rounded-none',
  'squared-outline': 'rounded-none',
};

const buttonShadowClasses = {
  none: 'shadow-none',
  small: 'shadow-sm',
  medium: 'shadow-1',
  large: 'shadow-lg',
  '2xl': 'shadow-2',
};

const isOutline = R.includes('outline');
const renderButtonStyle = R.cond([
  [
    R.propSatisfies(isOutline, 'shape'),
    (buttons: LinkInBioButtons) => ({
      border: `2px solid ${buttons.buttonColor}`,
    }),
  ],
  [
    R.T,
    (buttons: LinkInBioButtons): Record<string, string> => ({
      backgroundColor: `${buttons.buttonColor}`,
    }),
  ],
]);

interface BioLinksProps {
  links: LoaderDataLinkInBio['link']['attributes']['links'];
  buttons: LinkInBioButtons;
}

export const BioLinks: React.FC<BioLinksProps> = ({ links, buttons }) => {
  const { DEFAULT_DOMAIN_URL } = useEnvVariables();

  return (
    <section className="flex-1">
      {links.map((link) => (
        <a
          style={{ color: buttons.buttonTextColor, ...renderButtonStyle(buttons) }}
          className={`
                  block mb-3 p-3.5 sm:p-4.5 text-center leading-5 font-extrabold
                  ${buttonShapesClasses[buttons.shape]}
                  ${buttonShadowClasses[buttons.shadow]}
                `}
          key={link.id}
          target="_blank"
          rel="noopener noreferrer"
          href={`${link.domain_id ?? DEFAULT_DOMAIN_URL}/${link.shortLink}`}
        >
          {link.label}
        </a>
      ))}
    </section>
  );
};
