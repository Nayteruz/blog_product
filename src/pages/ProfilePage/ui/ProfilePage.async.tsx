import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
  // test timeout
  // @ts-ignore
  setTimeout(() => resolve(import('./ProfilePage')), 1000);
}));
