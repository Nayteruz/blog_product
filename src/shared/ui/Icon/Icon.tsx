import { FC, memo } from 'react';
import { cn } from '../../lib';
import EyeIcon from '../../assets/icons/eye.svg';
import ArrowLeftIcon from '../../assets/icons/arrow-left.svg';
import ArrowRightIcon from '../../assets/icons/arrow-right.svg';
import CalendarIcon from '../../assets/icons/calendar.svg';
import CheckIcon from '../../assets/icons/check.svg';
import CircleLeftIcon from '../../assets/icons/circle-left.svg';
import CircleRightIcon from '../../assets/icons/circle-right.svg';
import CloseIcon from '../../assets/icons/close.svg';
import EyeSlashIcon from '../../assets/icons/eye-slash.svg';
import HomeIcon from '../../assets/icons/home.svg';
import ListCheckIcon from '../../assets/icons/list-check.svg';
import MoonIcon from '../../assets/icons/moon.svg';
import MoonPurpleIcon from '../../assets/icons/moonPurple.svg';
import NewsIcon from '../../assets/icons/news.svg';
import ProfileIcon from '../../assets/icons/profile.svg';
import SunIcon from '../../assets/icons/sun.svg';
import CopyIcon from '../../assets/icons/copy.svg';
import ListIcon from '../../assets/icons/list.svg';
import TiledIcon from '../../assets/icons/tiled.svg';
import s from './Icon.module.scss';

const Icons = {
  'arrow-left': ArrowLeftIcon,
  'arrow-right': ArrowRightIcon,
  calendar: CalendarIcon,
  check: CheckIcon,
  'circle-left': CircleLeftIcon,
  'circle-right': CircleRightIcon,
  close: CloseIcon,
  eye: EyeIcon,
  'eye-slash': EyeSlashIcon,
  home: HomeIcon,
  'list-check': ListCheckIcon,
  moon: MoonIcon,
  'moon-purple': MoonPurpleIcon,
  news: NewsIcon,
  profile: ProfileIcon,
  sun: SunIcon,
  copy: CopyIcon,
  list: ListIcon,
  tiled: TiledIcon,
};

export type TIcon = keyof typeof Icons;

const sizeIcon = {
  S: 'sizeS',
  M: 'sizeM',
  L: 'sizeL',
  XL: 'sizeXl',
} as const;

interface IIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  name: keyof typeof Icons;
  size?: (typeof sizeIcon)[keyof typeof sizeIcon];
}

export const Icon: FC<IIconProps> = memo((props) => {
  const {
    className, name, size = sizeIcon.M, ...otherProps 
  } = props;

  const SvgIcon = Icons[name];

  if (!SvgIcon) {
    console.warn(`Icon with name "${name}" does not exist.`);
    return null;
  }

  return <SvgIcon className={cn(s.icon, s[size], className)} {...otherProps} />;
});
