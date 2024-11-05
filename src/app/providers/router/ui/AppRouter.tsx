import {
  memo, Suspense, useCallback,
} from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/shared/config';
import { PageLoader } from '@/widgets/PageLoader';
import { AppRoutesProps } from '@/shared/config/routeConfig/routeConfig';
import { RequireAuth } from './RequireAuth';

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const routeElement = (
      <Suspense fallback={<PageLoader />}>
        <div className="pageWrapper">{route.element}</div>
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{routeElement}</RequireAuth> : routeElement}
      />
    );
  }, []);

  return (
    <Routes>
      {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
  );
});
