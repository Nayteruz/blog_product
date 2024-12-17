import { FC, memo } from 'react';
import { cn } from '@/shared/lib';
import s from './ArticleViewSelector.module.scss';
import { ArticleListView, TArticleListView } from '../../model/types/article';
import {
  Button, HStack, Icon, TIcon 
} from '@/shared/ui';

interface IArticleViewSelectorProps {
  className?: string;
  view: TArticleListView;
  onViewClick: (selectedView: TArticleListView) => void;
}

interface IItemSelectorProps {
  view: TArticleListView;
  icon: TIcon;
}

const viewIcons: IItemSelectorProps[] = [
  {
    view: ArticleListView.LIST,
    icon: 'tiled',
  },
  {
    view: ArticleListView.SIMPLE,
    icon: 'list',
  },
];

export const ArticleViewSelector: FC<IArticleViewSelectorProps> = memo((props) => {
  const { className, view: selectedView, onViewClick } = props;

  return (
    <HStack gap="16" className={className}>
      {viewIcons.map(({ view, icon }) => (
        <Button
          className={cn(s.itemSelector, { [s.selected]: view === selectedView })}
          key={view}
          theme="clear"
          onClick={() => onViewClick(view)}
          role="presentation"
        >
          <Icon name={icon} />
        </Button>
      ))}
    </HStack>
  );
});
