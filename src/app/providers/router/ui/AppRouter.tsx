import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/shared/config';
import { PageLoader } from '@/widgets/PageLoader';

export const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={(
          <Suspense fallback={<PageLoader />}>
            <div className="pageWrapper">{element}</div>
          </Suspense>
        )}
      />
    ))}
  </Routes>
);
