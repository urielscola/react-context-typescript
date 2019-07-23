import React, { ComponentType } from 'react';
import { Redirect, RouteComponentProps } from '@reach/router';
import { isAuthenticated } from '../helpers/Auth';

type Props = { component: ComponentType } & RouteComponentProps;

const ProtectedRoute: ComponentType<Props> = ({
  component: Component,
  ...props
}) =>
  isAuthenticated() ? (
    <Component {...props} />
  ) : (
    <Redirect from={props.path} to="/" noThrow />
  );

export default ProtectedRoute;
