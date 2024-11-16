import { FC, memo } from 'react';
import { ArticleListView, TArticleListView } from '../../model/types/article';
import s from './ArticleListItem.module.scss';
import { cn } from '@/shared/lib';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui';

interface IArticleListItemSkeletonProps {
  className?: string;
  view: TArticleListView;
}

export const ArticleListItemSkeleton: FC<IArticleListItemSkeletonProps> = memo(props => {
  const { className, view } = props;

  switch (view) {
  case ArticleListView.LIST:
    return (
      <div className={cn(s.articleListItem, className, s[view])}>
        <Card className={s.card}>
          <div className={s.imageWrappper}>
            <Skeleton className={s.image} />
          </div>
          <div className={s.info}>
            <Skeleton className={s.type} height={24} />
            <Skeleton className={s.views} height={24} width={70} />
          </div>
          <Skeleton className={s.title} height={32} />
        </Card>
      </div>
    );
  case ArticleListView.SIMPLE:
    return (
      <div className={cn(s.articleListItem, className, s[view])}>
        <Card className={s.card}>
          <div className={s.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton height={24} width={150} className={s.username} />
            <Skeleton height={24} width={80} className={s.date} />
          </div>
          <Skeleton height={32} width={250} className={s.title} />
          <Skeleton height={24} width="40%" className={s.type} />
          <Skeleton height={200} width="100%" className={s.image} />
          <Skeleton height={32} width={150} />
          <Skeleton height={24} width="90%" />
          <Skeleton height={24} width="80%" />
          <Skeleton height={24} width="95%" />
          <Skeleton height={24} width="75%" />
          <Skeleton height={24} width="60%" />
          <div className={s.footer}>
            <Skeleton height={38} width={150} />
            <Skeleton height={24} width={40} className={s.views} />
            <Skeleton height={20} width={20} />
          </div>
        </Card>
      </div>
    );
  default:
    return null;
  }
});
