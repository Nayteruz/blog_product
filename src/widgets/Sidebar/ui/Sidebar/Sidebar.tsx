import { FC, useState } from 'react';
import { cn } from '@/shared/lib';
import { Button } from '@/shared/ui';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import s from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div data-testid="sidebar" className={cn(s.sidebar, { [s.collapsed]: collapsed }, className)}>
      <Button data-testid="sidebar-toggle" onClick={onToggle}>toggle</Button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
