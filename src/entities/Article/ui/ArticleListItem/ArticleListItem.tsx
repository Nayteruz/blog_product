import {
  FC, HTMLAttributeAnchorTarget, memo, useMemo 
} from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib';
import s from './ArticleListItem.module.scss';
import {
  ArticleListView, ArticleViewType, IArticle, TArticleListView 
} from '../../model/types/article';
import { Text } from '@/shared/ui/Text';
import {
  AppLink, Avatar, Button, Icon 
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
  const { className, article, view, target = '_self' } = props;
  const { t } = useTranslation();

  const types = <Text text={(article?.type || [])?.join(', ')} className={s.type} />;
  const views = (
    <>
      <Text text={String(article.views)} className={s.views} />
      <Icon name="eye" size="sizeS" className={s.icon} />
    </>
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
          <div className={s.info}>
            {types}
            {views}
          </div>
          <Text text={article.title} className={s.title} />
        </Card>
      </AppLink>
    );
  case ArticleListView.SIMPLE:
    return (
      <div className={cn(s.articleListItem, className, s[view])}>
        <Card className={s.card}>
          <div className={s.header}>
            {article?.user?.avatar && <Avatar size={30} src={article?.user?.avatar || ''} />}
            <Text text={article?.user?.username || ''} className={s.username} />
            <Text text={new Date(article.createdAt).toLocaleDateString()} className={s.date} />
          </div>
          <Text title={article.title} className={s.title} />
          {types}
          <img src={article.img} alt={article.title} className={s.image} />
          {firstTextBlock && <ArticleTextBlock block={firstTextBlock} className={s.textBlock} />}
          <div className={s.footer}>
            <AppLink to={linkToArticle} target={target}>
              <Button theme="outline">{t('Read more')}</Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  default:
    return null;
  }
});
