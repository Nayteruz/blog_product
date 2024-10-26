import {
  CSSProperties, FC, memo, useMemo, useState,
} from 'react';
import { cn } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import CircleLeftIcon from '@/shared/assets/icons/circle-left.svg';
import CircleRightIcon from '@/shared/assets/icons/circle-right.svg';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { listMenu } from '../../model/links';
import s from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
  style?: CSSProperties;
}

export const Sidebar: FC<ISidebarProps> = memo(({ className, style }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  const items = useMemo(() => listMenu.map((item) => (
    <SidebarItem key={item.path} item={item} collapsed={collapsed} />
  )), [collapsed]);

  return (
    <div
      data-testid="sidebar"
      className={cn(s.sidebar, { [s.collapsed]: collapsed }, className)}
      style={style}
    >
      <Button
        data-testid="sidebar-toggle"
        className={s.collapseBtn}
        onClick={onToggle}
        theme="backgroundInverted"
        square
        size="XL"
      >
        {collapsed ? <CircleRightIcon /> : <CircleLeftIcon />}
      </Button>
      <div className={s.items}>
        {items}
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
});
