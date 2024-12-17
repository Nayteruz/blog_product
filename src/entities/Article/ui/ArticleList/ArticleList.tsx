import { FC, HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { IArticle, TArticleListView, ArticleListView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Flex, Text } from '@/shared/ui';

interface IArticleListProps {
  className?: string;
  articles: IArticle[];
  isLoading?: boolean;
  view?: TArticleListView;
  target?: HTMLAttributeAnchorTarget;
  isWrap?: boolean;
}

const getSkeletons = (view: TArticleListView) => {
  const items = new Array(view === ArticleListView.LIST ? 6 : 3).fill(0);
  return items.map((_, index) => (
    // eslint-disable-next-line react/no-array-index-key
    <ArticleListItemSkeleton key={index} view={view} />
  ));
};

export const ArticleList: FC<IArticleListProps> = memo((props) => {
  const { t } = useTranslation();
  const { className, articles, isLoading, view = ArticleListView.SIMPLE, target = '_self', isWrap = true } = props;
  const isList = view === ArticleListView.LIST;
  const direction = isList ? 'row' : 'column';
  const wrap = isList && isWrap ? 'wrap' : undefined;
  const align = isList ? undefined : 'stretch';

  const renderArticle = (article: IArticle) => (
    <ArticleListItem article={article} view={view} key={article.id} target={target} />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={className}>
        <Text size={24} title={t('Articles not found')} text={t('Articles not found text')} />
      </div>
    );
  }

  return (
    <Flex gap="16" direction={direction} wrap={wrap} align={align} className={className}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </Flex>
  );
});
