import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import { Page } from '@/shared/ui';
import s from './NotFound.module.scss';

interface INotFoundProps {
  className?: string;
}

export const NotFoundPage: FC<INotFoundProps> = ({ className = '' }) => {
  const { t } = useTranslation();

  return <Page className={cn(s.notFoundPage, className)}>{t('Page not found')}</Page>;
};
