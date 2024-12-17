import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib';
import { ArticleDetails, ArticleList } from '@/entities/Article';
import { Text, VStack } from '@/shared/ui';
import { CommentList } from '@/entities/Comment';
import s from './ArticleDetailsPage.module.scss';
import { ReducersList, useDynamicReducer } from '@/shared/hooks/useDynamicReducer';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';
import { AddCommentForm } from '@/features/AddCommentForm';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Page } from '@/widgets/Page';
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationsSlice';
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface IArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = { articleDetailsPage: articleDetailsPageReducer };

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

  useDynamicReducer(reducers);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id && __PROJECT__ !== 'storybook') {
    return <Page className={cn(s.articleDetailsPage, className)}>{t('Article not found')}</Page>;
  }

  return (
    <Page className={className}>
      <VStack gap="16">
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id || '0'} />
        <Text size={24} title={t('Recommendations')} />
        <ArticleList
          className={s.recommendationList}
          isLoading={recommendationsIsLoading}
          articles={recommendations}
          view="list"
          target="_blank"
          isWrap={false}
        />
        <Text size={24} title={t('Comments')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </VStack>
    </Page>
  );
};

export default memo(ArticleDetailsPage);
