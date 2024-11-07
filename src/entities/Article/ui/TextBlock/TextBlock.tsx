import { FC, memo } from 'react';
import { cn } from '@/shared/lib';
import s from './TextBlock.module.scss';
import { Text } from '@/shared/ui/Text';
import { IArticleTextBlock } from '../../model/types/article';

interface ITextBlockProps {
  className?: string;
  block: IArticleTextBlock;
}

export const ArticleTextBlock: FC<ITextBlockProps> = memo(({ className, block }) => (
  <div className={cn(s.textBlock, className)}>
    {block.title && <Text title={block.title} className={s.title} />}
    {block.paragraphs.map((paragraph) => (
      <Text key={paragraph} text={paragraph} className={s.paragraph} />
    ))}
  </div>
));
