import { FC, memo } from 'react';
import { cn } from '@/shared/lib';
import s from './CommentCard.module.scss';
import { IComment } from '../../model/types/comment';
import {
  AppLink, Avatar, Skeleton, Text 
} from '@/shared/ui';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface ICommentCardProps {
  comment: IComment;
  className?: string;
  isLoading?: boolean;
}

export const CommentCard: FC<ICommentCardProps> = memo((props) => {
  const {
    className, comment, isLoading 
  } = props;

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
      {comment.user.avatar && (
        <AppLink to={`${RoutePath.profile}${comment.user.id}`} className={s.avatar}>
          <Avatar size={30} src={comment.user.avatar || ''} />
        </AppLink>
      )}
      <AppLink to={`${RoutePath.profile}${comment.user.id}`}>
        <Text title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} className={s.commentText} />
    </div>
  );
});
