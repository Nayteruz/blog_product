import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { cn } from '@/shared/lib';
import s from './ArticleDetailsPage.module.scss';
import { ArticleDetails } from '@/entities/Article';

interface IArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();

  if (!id) {
    return (
      <div className={cn(s.articleDetailsPage, className)}>
        {t('Article not found')}
      </div>
    );
  }

  return (
    <div className={cn(s.articleDetailsPage, className)}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
