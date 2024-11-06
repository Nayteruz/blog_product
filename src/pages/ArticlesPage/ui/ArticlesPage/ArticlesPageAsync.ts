import { lazy } from 'react';

// export const ArticlePageAsync = lazy(() => import('./ArticlePage'));
export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
