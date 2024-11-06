import { lazy } from 'react';

// export const ArticlePageAsync = lazy(() => import('./ArticlePage'));
export const ArticlePageAsync = lazy(() => new Promise((resolve) => {
  // @ts-ignore
  setTimeout(() => resolve(import('./ArticlePage')), 1500);
}));
