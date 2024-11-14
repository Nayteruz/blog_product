import { createSelector } from '@reduxjs/toolkit';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { ISidebarItem } from '../types/sidebar';
import { getUserAuthData } from '@/entities/User';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItems: ISidebarItem[] = [
    {
      path: RoutePath.main,
      text: 'Main',
      icon: 'home',
    },
    {
      path: RoutePath.about,
      text: 'About',
      icon: 'list-check',
    },
  ];

  if (userData) {
    sidebarItems.push(
      {
        path: RoutePath.profile + userData.id,
        text: 'Profile',
        icon: 'profile',
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: 'Articles',
        icon: 'news',
        authOnly: true,
      },
    );
  }

  return sidebarItems;
});
