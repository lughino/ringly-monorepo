import { createContext, useContext } from 'react';
import type { EnvVariables } from '../types';

export const EnvContext = createContext<EnvVariables>({
  DEFAULT_DOMAIN_URL: '',
});

export const useEnvVariables = () => {
  const context = useContext(EnvContext);
  if (typeof context === 'undefined') {
    throw new Error('useEnvVariables must be used within a EnvContext');
  }

  return context;
};
