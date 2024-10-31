import { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { routeConfig } from '@/shared/config';
import { PageLoader } from '@/widgets/PageLoader';
import { getUserAuthData } from '@/entities/User';

export const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => Object.values(routeConfig).filter((route) => {
    if (route.authOnly && !isAuth) {
      return false;
    }
    return true;
  }), [isAuth]);

  return (
    <Routes>
      {routes.map(({ path, element }) => (
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
});
