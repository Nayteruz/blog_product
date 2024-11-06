import HomeIcon from '@/shared/assets/icons/home.svg';
import ListCheckIcon from '@/shared/assets/icons/list-check.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import NewsIcon from '@/shared/assets/icons/news.svg';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { ISidebarItem } from './types';

export const listMenu: ISidebarItem[] = [
  {
    path: RoutePath.main,
    text: 'Main',
    icon: <HomeIcon />,
  },
  {
    path: RoutePath.about,
    text: 'About',
    icon: <ListCheckIcon />,
  },
  {
    path: RoutePath.profile,
    text: 'Profile',
    icon: <ProfileIcon />,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: 'Articles',
    icon: <NewsIcon />,
    authOnly: true,
  },
];
