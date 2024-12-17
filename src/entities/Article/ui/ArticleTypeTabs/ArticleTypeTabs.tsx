import { FC, memo, useMemo } from 'react';
import { cn } from '@/shared/lib';
import { ArticleBlockType, TArticleBlockType } from '../../model/types/article';
import { ITabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import s from './ArticleTypeTabs.module.scss';

interface IArticleTypeTabsProps {
  className?: string;
  type: TArticleBlockType;
  onChangeType: (type: ITabItem) => void;
}

export const ArticleTypeTabs: FC<IArticleTypeTabsProps> = memo((props) => {
  const { className, type: typeArticle, onChangeType } = props;

  const typeTabs = useMemo(
    () => [
      ...Object.values(ArticleBlockType).map(type => ({
        value: type,
        content: type,
      })),
    ],
    [],
  );

  return (
    <Tabs className={cn(s.articleTypeTabs, className)} tabs={typeTabs} value={typeArticle} onTabClick={onChangeType} />
  );
});
