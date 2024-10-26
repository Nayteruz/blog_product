import { RouteProps } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { NotFoundPage } from '@/pages/NotFound';

export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
  PROFILE: 'profile',
  NOT_FOUND: 'not_found',

  // static
  STATIC_NOT_FOUND: 'static_not_found',
} as const;

type TAppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const RoutePath: Record<TAppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.STATIC_NOT_FOUND]: '/not-found',
  // Должен быть всегда последним
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<TAppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  [AppRoutes.STATIC_NOT_FOUND]: {
    path: RoutePath.static_not_found,
    element: <NotFoundPage />,
  },

  // always last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
