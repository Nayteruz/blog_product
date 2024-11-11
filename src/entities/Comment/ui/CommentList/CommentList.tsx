import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import s from './CommentList.module.scss';
import { IComment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface ICommentListProps {
  className?: string;
  comments?: IComment[];
  isLoading?: boolean;
}

export const CommentList: FC<ICommentListProps> = memo((props) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  return (
    <div className={cn(s.commentList, className)}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentCard
            className={s.comment}
            key={comment.id}
            comment={comment}
            isLoading={isLoading}
          />
        ))
      ) : (
        <div>{t('No comments')}</div>
      )}
    </div>
  );
});
