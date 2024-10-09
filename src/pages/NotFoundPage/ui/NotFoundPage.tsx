import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import s from './NotFoundPage.module.scss';

interface INotFoundPageProps {
  className?: string;
}

export const NotFoundPage: FC<INotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(s.notFoundPage, className)}>
      {t('Page not found')}
    </div>
  );
};
