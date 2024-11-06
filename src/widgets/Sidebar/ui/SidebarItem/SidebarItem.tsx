import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib';
import s from './SidebarItem.module.scss';
import { AppLink } from '@/shared/ui';
import { ISidebarItem } from '../../model/types';
import { getUserAuthData } from '@/entities/User';

interface ISidebarItemProps {
  item: ISidebarItem;
  collapsed?: boolean;
}

export const SidebarItem: FC<ISidebarItemProps> = memo(({ item, collapsed }) => {
  const { t } = useTranslation();
  const { path, text, icon } = item;
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink className={cn(s.item, { [s.collapsed]: collapsed })} to={path} theme="secondary">
      {icon && <span className={s.icon}>{icon}</span>}
      <span className={s.linkText}>{t(text)}</span>
    </AppLink>
  );
});