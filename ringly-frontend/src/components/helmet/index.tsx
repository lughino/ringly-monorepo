import React from 'react';
import { Helmet as HelmetAsync, HelmetData } from 'react-helmet-async';

export const helmetData = new HelmetData({});

export const Helmet: React.FC = ({ children }) => (
  <HelmetAsync helmetData={helmetData}>{children}</HelmetAsync>
);
