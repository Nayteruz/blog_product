import { FC, memo, ReactNode } from 'react';
import { cn } from '../../lib';
import s from './Tabs.module.scss';
import { Card } from '../Card/Card';
import { HStack } from '../Stack/HStack/HStack';

export interface ITabItem {
  value: string;
  content: ReactNode;
}

interface ITabsProps {
  className?: string;
  tabs: ITabItem[];
  value: string;
  onTabClick: (tab: ITabItem) => void;
}

export const Tabs: FC<ITabsProps> = memo((props) => {
  const {
    className, tabs, value, onTabClick 
  } = props;

  return (
    <HStack gap="8" wrap="wrap" className={className}>
      {tabs.map(tab => (
        <Card
          key={tab.value + tab.content}
          className={cn(s.card)}
          onClick={() => onTabClick(tab)}
          theme={tab.value === value ? 'normal' : 'outlined'}
          size="small"
        >
          {tab.content}
        </Card>
      ))}
    </HStack>
  );
});
