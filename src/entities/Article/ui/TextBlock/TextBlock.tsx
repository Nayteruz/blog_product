import { FC, memo } from 'react';
import { Text } from '@/shared/ui';
import { IArticleTextBlock } from '../../model/types/article';
import s from './TextBlock.module.scss';

interface ITextBlockProps {
  className?: string;
  block: IArticleTextBlock;
}

export const ArticleTextBlock: FC<ITextBlockProps> = memo(({ className, block }) => (
  <div className={className}>
    {block.title && <Text title={block.title} className={s.title} />}
    {block.paragraphs.map(paragraph => (
      <Text key={paragraph} text={paragraph} className={s.paragraph} />
    ))}
  </div>
));
