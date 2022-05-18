import React, { lazy, Suspense } from 'react';

const LazyRepositories = lazy(() => import('./Repositories'));

const Repositories = props => (
  <Suspense fallback={null}>
    <LazyRepositories {...props} />
  </Suspense>
);

export default Repositories;
