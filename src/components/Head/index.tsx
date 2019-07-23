import React from 'react';
import { Helmet } from 'react-helmet';

interface iHead {
  title: string;
  children?: any;
}

export default function Head({ title, children }: iHead) {
  return (
    <Helmet>
      {children}
      <title>{title}</title>
    </Helmet>
  );
}
