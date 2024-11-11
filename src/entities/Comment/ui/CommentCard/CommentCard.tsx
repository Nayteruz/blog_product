import { FC, memo } from 'react';
import { cn } from '@/shared/lib';
import s from './CommentCard.module.scss';
import { IComment } from '../../model/types/comment';
import { Avatar, Skeleton } from '@/shared/ui';
import { Text } from '@/shared/ui/Text';

interface ICommentCardProps {
  comment: IComment;
  className?: string;
  isLoading?: boolean;
}

export const CommentCard: FC<ICommentCardProps> = memo((props) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <div className={cn(s.commentCard, className)}>
        <Skeleton width={30} height={30} border="50%" />
        <Skeleton width={100} height={24} />
        <Skeleton width="80%" height={44} className={s.commentText} />
      </div>
    );
  }

  return (
    <div className={cn(s.commentCard, className)}>
      {comment.user.avatar && <Avatar size={30} src={comment.user.avatar || ''} className={s.avatar} />}
      <Text title={comment.user.username} />
      <Text text={comment.text} className={s.commentText} />
    </div>
  );
});
