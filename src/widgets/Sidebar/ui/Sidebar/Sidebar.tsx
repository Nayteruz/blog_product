import { FC, useState } from 'react';
import { cn } from '@/shared/lib';
import s from './Sidebar.module.scss'

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = ({className}) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className={cn(s.sidebar, {[s.collapsed]: collapsed}, className)}>
      Sidebar
      <button onClick={onToggle}>toggle</button>
    </div>
  );
};