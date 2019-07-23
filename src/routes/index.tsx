import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';
import Route from './Route';
import PrivateRoute from './PrivateRoute';

const LazyHome = lazy(() => import('../pages/Home'));
const LazyAbout = lazy(() => import('../pages/About'));

const Home = () => (
  <Suspense fallback={'Loading.....................'}>
    <LazyHome />
  </Suspense>
);

const About = () => (
  <Suspense fallback={'Loading.....................'}>
    <LazyAbout />
  </Suspense>
);

const Routes = () => (
  <Router>
    <Route path="/" component={Home} />
    <PrivateRoute path="/about" component={About} />
  </Router>
);

export default Routes;
