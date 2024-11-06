import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import s from './ArticlesPage.module.scss';

interface IArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<IArticlesPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(s.articlesPage, className)}>
      ArticlesPage
    </div>
  );
};

export default memo(ArticlesPage);
