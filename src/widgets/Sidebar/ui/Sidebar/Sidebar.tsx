import {
  CSSProperties, FC, memo, useMemo, useState 
} from 'react';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib';
import { Button, Icon } from '@/shared/ui';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import s from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';

interface ISidebarProps {
  className?: string;
  style?: CSSProperties;
}

export const Sidebar: FC<ISidebarProps> = memo(({ className, style }) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarMenuList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  const items = useMemo(
    () => sidebarMenuList.map(item => <SidebarItem key={item.path} item={item} collapsed={collapsed} />),
    [collapsed, sidebarMenuList],
  );

  return (
    <div data-testid="sidebar" className={cn(s.sidebar, { [s.collapsed]: collapsed }, className)} style={style}>
      <Button
        data-testid="sidebar-toggle"
        className={s.collapseBtn}
        onClick={onToggle}
        theme="backgroundInverted"
        square
        size="XL"
      >
        <Icon name={collapsed ? 'circle-right' : 'circle-left'} />
      </Button>
      <div className={s.items}>{items}</div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
});
