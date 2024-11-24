import {
  ChangeEvent, FC, memo, useCallback 
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib';
import {
  ArticleSortSelector,
  ArticleViewSelector,
  TArticleListView,
  TArticleSortField,
  ArticleTypeTabs,
} from '@/entities/Article';
import {
  getArticlesPageSearch,
  getArticlesPageOrder,
  getArticlesPageSort,
  getArticlesPageView,
  getArticlesPageType,
} from '../../model/selectors/articlesPageSelectors';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { articlesPageActions } from '../../model/slices/articlesPageSlice';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/ui/Input';
import { TSortOrder } from '@/shared/types';
import s from './ArticlePageFilters.module.scss';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/hooks/useDebounce';
import { TArticleBlockType } from '@/entities/Article/model/types/article';
import { ITabItem } from '@/shared/ui/Tabs/Tabs';

interface IArticlePageFiltersProps {
  className?: string;
}

export const ArticlePageFilters: FC<IArticlePageFiltersProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlesPageView);
  const sort = useSelector(getArticlesPageSort);
  const order = useSelector(getArticlesPageOrder);
  const search = useSelector(getArticlesPageSearch);
  const articleType = useSelector(getArticlesPageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback(
    (selectedView: TArticleListView) => {
      dispatch(articlesPageActions.setView(selectedView));
    },
    [dispatch],
  );

  const onChangeOrder = useCallback(
    (newOrder: TSortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSort = useCallback(
    (newSort: TArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  const onChangeSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(articlesPageActions.setSearch(e.target.value));
      dispatch(articlesPageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch, debouncedFetchData],
  );

  const onArticleType = useCallback(
    (tab: ITabItem) => {
      dispatch(articlesPageActions.setType(tab.value as TArticleBlockType));
      dispatch(articlesPageActions.setPage(1));
      fetchData();
    },
    [dispatch, fetchData],
  );

  return (
    <div className={cn(s.articlePageFilters, className)}>
      <div className={s.sortWrapper}>
        <ArticleSortSelector sort={sort} order={order} onChangeOrder={onChangeOrder} onChangeSort={onChangeSort} />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={s.searchCard}>
        <Input value={search} onChange={onChangeSearch} placeholder={t('Search')} />
      </Card>
      <ArticleTypeTabs type={articleType} onChangeType={onArticleType} />
    </div>
  );
});
