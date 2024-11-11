import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib';
import { ArticleDetails } from '@/entities/Article';
import { Text } from '@/shared/ui/Text';
import { CommentList } from '@/entities/Comment';
import s from './ArticleDetailsPage.module.scss';
import { ReducersList, useDynamicReducer } from '@/shared/hooks/useDynamicReducer';
import { articleDetailsCommentsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';

interface IArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<IArticleDetailsPageProps> = ({ className }) => {
  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

  useDynamicReducer(reducers);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

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
      <Text className={s.commentTitle} title={t('Comments')} />
      <CommentList
        isLoading={commentsIsLoading}
        comments={comments}
      />
    </div>
  );
};

export default memo(ArticleDetailsPage);
