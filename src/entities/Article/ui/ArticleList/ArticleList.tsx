import { FC, memo } from 'react';
import { cn } from '@/shared/lib';
import s from './ArticleList.module.scss';
import { IArticle, TArticleListView, ArticleListView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface IArticleListProps {
  className?: string;
  articles: IArticle[];
  isLoading?: boolean;
  view?: TArticleListView;
}

const getSkeletons = (view: TArticleListView) => {
  const items = new Array(view === ArticleListView.LIST ? 9 : 3).fill(0);
  return items.map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ArticleListItemSkeleton key={index} view={view} />
  ));
};

export const ArticleList: FC<IArticleListProps> = memo((props) => {
  const { className, articles, isLoading, view = ArticleListView.SIMPLE } = props;

  const renderArticle = (article: IArticle) => <ArticleListItem article={article} view={view} key={article.id} />;

  return (
    <div className={cn(s.articleList, className, s[view])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
