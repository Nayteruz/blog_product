import {
  FC, HTMLAttributeAnchorTarget, memo, useMemo 
} from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import s from './ArticleListItem.module.scss';
import {
  ArticleListView, ArticleViewType, IArticle, TArticleListView 
} from '../../model/types/article';
import {
  Text, AppLink, Avatar, Button, Icon, HStack 
} from '@/shared/ui';
import { Card } from '@/shared/ui/Card/Card';
import { ArticleTextBlock } from '../TextBlock/TextBlock';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface IArticleListItemProps {
  className?: string;
  article: IArticle;
  view: TArticleListView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem: FC<IArticleListItemProps> = memo((props) => {
  const {
    className, article, view, target = '_self' 
  } = props;
  const { t } = useTranslation();

  const types = <Text text={(article?.type || [])?.join(', ')} className={s.type} />;
  const views = (
    <HStack align="center" gap="8">
      <Text text={String(article.views)} />
      <Icon name="eye" size="sizeS" className={s.icon} />
    </HStack>
  );
  const firstTextBlock = article.blocks?.find(block => block.type === ArticleViewType.TEXT);

  const linkToArticle = useMemo(() => `${RoutePath.article_details}${article.id}`, [article.id]);

  switch (view) {
  case ArticleListView.LIST:
    return (
      <AppLink to={linkToArticle} target={target} className={cn(s.articleListItem, className, s[view])}>
        <Card className={s.card}>
          <div className={s.imageWrappper}>
            <img src={article.img} alt={article.title} className={s.image} />
            <Text text={new Date(article.createdAt).toLocaleDateString()} className={s.date} />
          </div>
          <HStack align="center" gap="8">
            {types}
            {views}
          </HStack>
          <Text text={article.title} className={s.title} />
        </Card>
      </AppLink>
    );
  case ArticleListView.SIMPLE:
    return (
      <div className={cn(s.articleListItem, className, s[view])}>
        <Card className={s.card}>
          <HStack align="center" justify="space-between" gap="8">
            <HStack gap="16">
              {article?.user?.avatar && <Avatar size={30} src={article?.user?.avatar || ''} />}
              <Text text={article?.user?.username || ''} />
            </HStack>
            <Text text={new Date(article.createdAt).toLocaleDateString()} className={s.date} />
          </HStack>
          <Text title={article.title} className={s.title} />
          {types}
          <img src={article.img} alt={article.title} className={s.image} />
          {firstTextBlock && <ArticleTextBlock block={firstTextBlock} className={s.textBlock} />}
          <HStack justify="space-between" align="center" className={s.footer}>
            <AppLink to={linkToArticle} target={target}>
              <Button theme="outline">{t('Read more')}</Button>
            </AppLink>
            {views}
          </HStack>
        </Card>
      </div>
    );
  default:
    return null;
  }
});
