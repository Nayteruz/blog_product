import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import s from './articleDetailsPage.module.scss';

interface IArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cn(s.articleDetailsPage, className)}>
      ArticleDetailsPage
    </div>
  );
};

export default memo(ArticleDetailsPage);
