import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import s from './articlePage.module.scss';

interface IArticlePageProps {
  className?: string;
}

const ArticlePage: FC<IArticlePageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(s.articlePage, className)}>
      ArticlePage
    </div>
  );
};

export default memo(ArticlePage);
