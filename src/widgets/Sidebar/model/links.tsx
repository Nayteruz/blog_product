import HomeIcon from '@/shared/assets/icons/home.svg';
import ListCheckIcon from '@/shared/assets/icons/list-check.svg';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

export const listMenu = [
  {
    link: RoutePath.main,
    text: 'Main',
    icon: <HomeIcon />,
  },
  {
    link: RoutePath.about,
    text: 'About',
    icon: <ListCheckIcon />,
  },
];
