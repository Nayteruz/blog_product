import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { cn } from '@/shared/lib';
import s from './ArticlesPage.module.scss';
import { ArticleList } from '@/entities/Article';
import { ReducersList, useDynamicReducer } from '@/shared/hooks/useDynamicReducer';
import { articlesPageReducer, getArticles } from '../../model/slices/articlesPageSlice';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';
import {
  getArticlesPageError,
  getArticlesPageLoading,
  getArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import { PageError } from '@/widgets/PageError';
import { Page } from '@/widgets/Page';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlePageFilters } from '../ArticlesPageFilters/ArticlePageFilters';
import { VStack } from '@/shared/ui';

interface IArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = { articlesPage: articlesPageReducer };

const ArticlesPage: FC<IArticlesPageProps> = (props) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  useDynamicReducer(reducers);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  if (error) {
    return (
      <Page>
        <PageError errorText={error} className={s.error} />
      </Page>
    );
  }

  return (
    <Page isLoading={isLoading} onScrollEnd={onLoadNextPart} className={cn(s.articlesPage, className)}>
      <VStack gap="16">
        <ArticlePageFilters />
        <ArticleList view={view} isLoading={isLoading} articles={articles} />
      </VStack>
    </Page>
  );
};

export default memo(ArticlesPage);
