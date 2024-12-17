import {
  FC, memo, useCallback, useEffect 
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib';
import { ReducersList, useDynamicReducer } from '@/shared/hooks/useDynamicReducer';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from '../../model/selectors/articleDetails';
import {
  Text, Avatar, Skeleton, Icon, VStack, HStack 
} from '@/shared/ui';
import s from './ArticleDetails.module.scss';
import { ArticleViewType, TArticleBlock } from '../../model/types/article';
import { ArticleCodeBlock } from '../CodeBlock/CodeBlock';
import { ArticleImageBlock } from '../ImageBlock/ImageBlock';
import { ArticleTextBlock } from '../TextBlock/TextBlock';

interface IArticleDetailsProps {
  id: string;
  className?: string;
}

const reducers: ReducersList = { articleDetails: articleDetailsReducer };

export const ArticleDetails: FC<IArticleDetailsProps> = memo(({ className, id }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: TArticleBlock) => {
    switch (block.type) {
    case ArticleViewType.CODE:
      return <ArticleCodeBlock key={block.id} block={block} />;
    case ArticleViewType.IMAGE:
      return <ArticleImageBlock key={block.id} block={block} />;
    case ArticleViewType.TEXT:
      return <ArticleTextBlock key={block.id} block={block} />;
    default:
      return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  useDynamicReducer(reducers);

  if (error) {
    return (
      <VStack align="center" justify="center" gap="16" className={className}>
        <Text title="Something went wrong" text={error} theme="error" align="center" />
      </VStack>
    );
  }

  if (!article || isLoading) {
    return (
      <VStack gap="16" className={className}>
        <Skeleton className={s.avatar} width={200} height={200} border="50%" />
        <Skeleton className={s.skeleton} width="85%" height={50} />
        <Skeleton className={s.skeleton} width="95%" height={30} />
        <Skeleton className={s.skeleton} width="90%" height={150} />
        <Skeleton className={s.skeleton} width="93%" height={100} />
      </VStack>
    );
  }

  if (!article) {
    return (
      <VStack gap="16" className={className}>
        <Text title={t('Not found article title')} theme="error" align="center" />
      </VStack>
    );
  }

  return (
    <VStack gap="16" className={cn(s.articleDetails, className)}>
      {article?.img && (
        <Avatar size={200} src={article?.img} alt={article?.title} title={article?.title} className={s.avatar} />
      )}
      <Text title={article.title} text={article.subtitle} size={24} />
      <HStack align="center" gap="16">
        <Icon name="eye" />
        {article.views}
      </HStack>
      <HStack align="center" gap="16">
        <Icon name="calendar" />
        {new Date(article.createdAt).toLocaleDateString()}
      </HStack>
      <VStack gap="16">{article?.blocks?.map(renderBlock)}</VStack>
    </VStack>
  );
});
