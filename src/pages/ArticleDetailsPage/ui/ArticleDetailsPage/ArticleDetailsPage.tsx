import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib';
import { ArticleDetails, ArticleList } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';
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
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { Button } from '@/shared/ui';
import { getArticleRecommendations } from '../../model/slices/articleDetailsPageRecommendationsSlice';
// eslint-disable-next-line max-len
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { getArticleRecommendationsIsLoading } from '../../model/selectors/recommendations';
import { articleDetailsPageReducer } from '../../model/slices';

interface IArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = { articleDetailsPage: articleDetailsPageReducer };

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
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

  const navigateToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id && __PROJECT__ !== 'storybook') {
    return <Page className={cn(s.articleDetailsPage, className)}>{t('Article not found')}</Page>;
  }

  return (
    <Page className={cn(s.articleDetailsPage, className)}>
      <Button className={s.back} onClick={navigateToList}>
        {t('Back to article list')}
      </Button>
      <ArticleDetails id={id || '0'} />
      <Text size={24} className={s.recommendationTitle} title={t('Recommendations')} />
      <ArticleList
        className={s.recommendationList}
        isLoading={recommendationsIsLoading}
        articles={recommendations}
        view="list"
        target="_blank"
      />
      <Text size={24} className={s.commentTitle} title={t('Comments')} />
      <AddCommentForm className={s.commentForm} onSendComment={onSendComment} />
      <CommentList isLoading={commentsIsLoading} comments={comments} />
    </Page>
  );
};

export default memo(ArticleDetailsPage);
