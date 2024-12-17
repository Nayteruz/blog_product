import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { IComment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { VStack } from '@/shared/ui';

interface ICommentListProps {
  className?: string;
  comments?: IComment[];
  isLoading?: boolean;
}

export const CommentList: FC<ICommentListProps> = memo((props) => {
  const { className, comments, isLoading } = props;
  const { t } = useTranslation();

  return (
    <VStack gap="16" className={className}>
      {comments?.length ? (
        comments.map(comment => <CommentCard key={comment.id} comment={comment} isLoading={isLoading} />)
      ) : (
        <div>{t('No comments')}</div>
      )}
    </VStack>
  );
});
