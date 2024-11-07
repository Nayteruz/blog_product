import { FC, memo } from 'react';
import { cn } from '@/shared/lib';
import EyeIcon from '@/shared/assets/icons/eye.svg';
import ArrowLeftIcon from '@/shared/assets/icons/arrow-left.svg';
import ArrowRightIcon from '@/shared/assets/icons/arrow-right.svg';
import CalendarIcon from '@/shared/assets/icons/calendar.svg';
import CheckIcon from '@/shared/assets/icons/check.svg';
import CircleLeftIcon from '@/shared/assets/icons/circle-left.svg';
import CircleRightIcon from '@/shared/assets/icons/circle-right.svg';
import CloseIcon from '@/shared/assets/icons/close.svg';
import EyeSlashIcon from '@/shared/assets/icons/eye-slash.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ListCheckIcon from '@/shared/assets/icons/list-check.svg';
import MoonIcon from '@/shared/assets/icons/moon.svg';
import MoonPurpleIcon from '@/shared/assets/icons/moonPurple.svg';
import NewsIcon from '@/shared/assets/icons/news.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import SunIcon from '@/shared/assets/icons/sun.svg';
import CopyIcon from '@/shared/assets/icons/copy.svg';
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
  size?: (typeof sizeIcon)[keyof typeof sizeIcon]
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

  return (
    <SvgIcon className={cn(s.icon, s[size], className)} {...otherProps} />
  );
});
