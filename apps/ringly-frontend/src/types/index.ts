import type { CSSProperties } from 'react';
import type { GetLinkByShortLinkQuery, GetLinksByPkQuery, GetCtaByIdQuery } from '../client';

export interface RedirectAttributes {
  code: number;
}

export interface LinkInBioAttributesLink {
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

export interface LinkInBioAttributes<T = LinkInBioAttributesLink> {
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

export interface CtaMetaData {
  title: { text: string };
  meta: Record<string, string>[];
  favicon: Record<string, string>[];
  lastUpdate: Date;
}

export interface CtaAttributes {
  destinationLinkMetadata: CtaMetaData;
}

export interface DataLink<T = unknown>
  extends Omit<GetLinkByShortLinkQuery['link'][0], 'attributes'> {
  attributes: T;
}

export type CtaLink = DataLink<CtaAttributes>;

type CtaQueryById = NonNullable<Required<GetCtaByIdQuery['cta_by_pk']>>;

export type CtaData<T = unknown> = Omit<CtaQueryById, 'attributes'> & {
  attributes: T;
};

export interface CtaImageStyle {
  hideRinglyLogo: boolean;
  position:
    | 'bottom-left'
    | 'bottom-right'
    | 'top-left'
    | 'top-right'
    | 'center-left'
    | 'center-right';
}

export interface CtaStyle {
  theme: 'baloon' | 'full-width' | 'social' | 'candy';
  textColor: CSSProperties['color'];
  buttonColor: CSSProperties['color'];
  hideRinglyLogo: boolean;
  backgroundColor: CSSProperties['color'];
  buttonTextColor: CSSProperties['color'];
  position:
    | 'bottom-left'
    | 'bottom-right'
    | 'top-left'
    | 'top-right'
    | 'center-left'
    | 'center-right'
    | 'top-full-width'
    | 'bottom-full-width';
}

export type CtaDataImage = CtaData<{
  style: CtaImageStyle;
  url: string;
  imageUrl: string;
}>;

export type CtaDataButton = CtaData<{
  style: CtaStyle;
  message: string;
  url: string;
  text: string;
}>;

export type CtaDataForm = CtaData<{
  style: CtaStyle;
  message: string;
  placeholderText: string;
}>;

export interface LoaderDataCta {
  link: CtaLink;
  cta: CtaDataButton | CtaDataForm | CtaDataImage;
}

export type LinkInBioLink = DataLink<LinkInBioAttributes<LinkInBioAttributesLink>>;

export interface LoaderDataLinkInBio {
  link: DataLink<LinkInBioAttributes<GetLinksByPkQuery['link'][0] & LinkInBioAttributesLink>>;
}

export type RedirectLink = DataLink<RedirectAttributes>;

export interface LoaderDataRedirect {
  link: RedirectLink;
}
