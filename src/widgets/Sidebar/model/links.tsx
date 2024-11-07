import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { ISidebarItem } from './types';

export const listMenu: ISidebarItem[] = [
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
  {
    path: RoutePath.profile,
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
];
