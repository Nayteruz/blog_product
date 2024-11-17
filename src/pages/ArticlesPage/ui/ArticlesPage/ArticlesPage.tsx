import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib';
import s from './ArticlesPage.module.scss';
import { ArticleList, ArticleViewSelector, TArticleListView } from '@/entities/Article';
import { ReducersList, useDynamicReducer } from '@/shared/hooks/useDynamicReducer';
import { articlesPageActions, articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageError,
  getArticlesPageLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { PageError } from '@/widgets/PageError';
import { Page } from '@/shared/ui';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';

interface IArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = { articlesPage: articlesPageReducer };

const ArticlesPage: FC<IArticlesPageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  useDynamicReducer(reducers);

  const onChangeView = useCallback(
    (selectedView: TArticleListView) => {
      dispatch(articlesPageActions.setView(selectedView));
    },
    [dispatch],
  );

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticlesList({ page: 1 }));
  });

  if (error) {
    return (
      <Page>
        <PageError errorText={error} className={s.error} />
      </Page>
    );
  }

  return (
    <Page onScrollEnd={onLoadNextPart} className={cn(s.articlesPage, className)}>
      <div>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <ArticleList view={view} isLoading={isLoading} articles={articles} />
    </Page>
  );
};

export default memo(ArticlesPage);
