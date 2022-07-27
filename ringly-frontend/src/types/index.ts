import type { CSSProperties } from 'react';
import type { GetLinkByShortLinkQuery, GetLinksByPkQuery } from '../client';

export interface EnvVariables {
  DEFAULT_DOMAIN_URL: string;
}

export interface RedirectAttributes {
  code: number;
}

export interface LinkInBioLink {
  id: string;
  order: number;
  enabled: boolean;
  schedule: {
    endDate: Date | string | null;
    startDate: Date | string | null;
  };
}

export interface LinkInBioButtons {
  shape:
    | 'rounded-xl'
    | 'rounded-sm'
    | 'squared'
    | 'rounded-xl-outline'
    | 'rounded-sm-outline'
    | 'squared-outline';
  shadow: 'small' | 'medium' | 'large' | '2xl' | 'none';
  buttonColor: CSSProperties['color'];
  buttonTextColor: CSSProperties['color'];
}

export interface LinkInBioAttributes<T = LinkInBioLink> {
  font: {
    size: string;
    family: string;
  };
  page: {
    layout: 'frame' | 'pro' | 'hero' | 'classic';
    styles: {
      titleColor: CSSProperties['color'];
      backgroundColor: CSSProperties['color'];
      backgroundImage: {
        url: string | null;
        styles: {
          position: 'stretch-to-fit';
        };
        originalUrl: string | null;
      };
      descriptionColor: CSSProperties['color'];
    };
  };
  links: T[];
  buttons: LinkInBioButtons;
  profile: {
    image: {
      url: string | null;
      originalUrl: string | null;
    };
    title: string;
    description?: string | null;
  };
  hideRinglyLogo: boolean;
}

export interface DataLink<T = unknown>
  extends Omit<GetLinkByShortLinkQuery['link'][0], 'attributes'> {
  attributes: T;
}

export type LinkInBio = DataLink<LinkInBioAttributes<LinkInBioLink>>;

export interface LoaderDataLinkInBio {
  link: DataLink<LinkInBioAttributes<GetLinksByPkQuery['link'][0] & LinkInBioLink>>;
}

export interface LoaderDataRedirect {
  link: DataLink<RedirectAttributes>;
}
