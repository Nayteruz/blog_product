import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import s from './NotFound.module.scss';

interface INotFoundProps {
  className?: string;
}

export const NotFoundPage: FC<INotFoundProps> = ({ className = '' }) => {
  const { t } = useTranslation();

  return <div className={cn(s.notFoundPage, className)}>{t('Page not found')}</div>;
};
