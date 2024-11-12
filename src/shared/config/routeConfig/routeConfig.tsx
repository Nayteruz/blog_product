import { RouteProps } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { NotFoundPage } from '@/pages/NotFound';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export const AppRoutes = {
  MAIN: 'main',
  ABOUT: 'about',
  PROFILE: 'profile',
  NOT_FOUND: 'not_found',
  ARTICLES: 'articles',
  ARTICLE_DETAILS: 'article_details',

  // static
  STATIC_NOT_FOUND: 'static_not_found',
} as const;

type TAppRoutes = (typeof AppRoutes)[keyof typeof AppRoutes];

export const RoutePath: Record<TAppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // + :id
  [AppRoutes.STATIC_NOT_FOUND]: '/not-found',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/article/', // /article/:id
  // Должен быть всегда последним
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<TAppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.STATIC_NOT_FOUND]: {
    path: RoutePath.static_not_found,
    element: <NotFoundPage />,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailsPage />,
    authOnly: true,
  },

  // always last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
