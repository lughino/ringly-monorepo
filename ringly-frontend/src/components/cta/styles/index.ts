import { Kind_Cta_Enum } from 'src/client';

export const positionClasses = {
  'bottom-left': 'bottom-2 left-4 top-auto right-auto',
  'center-left': 'bottom-auto left-4 top-1/2 right-auto -translate-y-2/4',
  'center-right': 'bottom-auto left-auto top-1/2 right-4 -translate-y-2/4',
  'bottom-right': 'bottom-2 right-4 top-auto left-auto',
  'top-left': 'top-2 left-4 bottom-auto right-auto',
  'top-right': 'top-2 right-4 bottom-auto left-auto',
  'top-full-width': 'top-0 left-0 bottom-auto right-0',
  'bottom-full-width': 'bottom-0 left-0 top-auto right-0',
};

export const kindClasses = {
  [Kind_Cta_Enum.Button]: 'px-4 border-2 border-solid  rounded-2xl',
  [Kind_Cta_Enum.Text]: 'underline',
  [Kind_Cta_Enum.Form]: '',
  [Kind_Cta_Enum.Hidden]: '',
  [Kind_Cta_Enum.Image]: '',
};
