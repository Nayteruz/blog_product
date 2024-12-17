import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib';
import s from './SidebarItem.module.scss';
import { AppLink, Icon } from '@/shared/ui';
import { getUserAuthData } from '@/entities/User';
import { ISidebarItem } from '../../model/types/sidebar';

interface ISidebarItemProps {
  item: ISidebarItem;
  collapsed?: boolean;
}

export const SidebarItem: FC<ISidebarItemProps> = memo(({
  item, collapsed 
}) => {
  const { t } = useTranslation();
  const {
    path, text, icon 
  } = item;
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink className={cn(s.item, { [s.collapsed]: collapsed })} to={path} theme="secondary">
      {icon && <Icon name={icon} size={collapsed ? 'sizeL' : undefined} />}
      <span className={s.linkText}>{t(text)}</span>
    </AppLink>
  );
});
