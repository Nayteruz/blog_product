import { CSSProperties, FC, useState } from 'react';
import { cn } from '@/shared/lib';
import { AppLink, Button } from '@/shared/ui';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import CircleLeftIcon from '@/shared/assets/icons/circle-left.svg';
import CircleRightIcon from '@/shared/assets/icons/circle-right.svg';
import { listMenu } from '../../model/links';
import s from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
  style?: CSSProperties;
}

export const Sidebar: FC<ISidebarProps> = ({ className, style }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

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
        {listMenu.map((item) => (
          <AppLink key={item.link} className={s.link} to={item.link} theme="secondary">
            {item.icon && <span className={s.icon}>{item.icon}</span>}
            <span className={s.linkText}>{item.text}</span>
          </AppLink>
        ))}
      </div>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
