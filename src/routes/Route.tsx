import React, { ComponentType } from 'react';
import { RouteComponentProps } from '@reach/router';

type Props = { component: ComponentType } & RouteComponentProps;

const Route: ComponentType<Props> = ({ component: Component, ...props }) => (
  <Component {...props} />
);

export default Route;
