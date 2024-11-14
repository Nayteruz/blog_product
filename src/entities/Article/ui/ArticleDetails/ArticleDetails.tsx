import {
  FC, memo, ReactNode, useCallback, useEffect,
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
import { Text } from '@/shared/ui/Text';
import { Avatar, Skeleton, Icon } from '@/shared/ui';
import s from './ArticleDetails.module.scss';
import { ArticleViewType, TArticleBlock } from '../../model/types/article';
import { ArticleCodeBlock } from '../CodeBlock/CodeBlock';
import { ArticleImageBlock } from '../ImageBlock/ImageBlock';
import { ArticleTextBlock } from '../TextBlock/TextBlock';

interface IArticleDetailsProps {
  id: string;
  className?: string;
}

interface IArticleContentProps {
  children?: ReactNode;
  className?: string;
}

const reducers: ReducersList = {articleDetails: articleDetailsReducer,};

const ArticleContent: FC<IArticleContentProps> = (props) => {
  const { children, className } = props;
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export const ArticleDetails: FC<IArticleDetailsProps> = memo(({ className, id }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: TArticleBlock) => {
    switch (block.type) {
    case ArticleViewType.CODE:
      return <ArticleCodeBlock key={block.id} block={block} className={s.block} />;
    case ArticleViewType.IMAGE:
      return <ArticleImageBlock key={block.id} block={block} className={s.block} />;
    case ArticleViewType.TEXT:
      return <ArticleTextBlock key={block.id} block={block} className={s.block} />;
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
      <ArticleContent className={cn(s.error, className)}>
        <Text title="Something went wrong" text={error} theme="error" align="center" />
      </ArticleContent>
    );
  }

  if (!article || isLoading) {
    return (
      <ArticleContent className={cn(s.loading, className)}>
        <Skeleton className={s.avatar} width={200} height={200} border="50%" />
        <Skeleton className={s.skeleton} width="85%" height={50} />
        <Skeleton className={s.skeleton} width="95%" height={30} />
        <Skeleton className={s.skeleton} width="90%" height={150} />
        <Skeleton className={s.skeleton} width="93%" height={100} />
      </ArticleContent>
    );
  }

  if (!article) {
    return (
      <ArticleContent className={cn(s.loading, className)}>
        <Text title={t('Not found article title')} theme="error" align="center" />
      </ArticleContent>
    );
  }

  return (
    <ArticleContent className={cn(s.articleDetails, className)}>
      {article?.img && (
        <Avatar
          size={200}
          src={article?.img}
          alt={article?.title}
          title={article?.title}
          className={s.avatar}
        />
      )}
      <Text title={article.title} text={article.subtitle} size={24} />
      <div className={s.views}>
        <Icon name="eye" />
        {article.views}
      </div>
      <div className={s.date}>
        <Icon name="calendar" />
        {new Date(article.createdAt).toLocaleDateString()}
      </div>
      {article?.blocks?.map(renderBlock)}
    </ArticleContent>
  );
});
