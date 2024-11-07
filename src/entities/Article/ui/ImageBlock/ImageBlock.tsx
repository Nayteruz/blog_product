import { FC, memo } from 'react';
import { cn } from '@/shared/lib';
import s from './ImageBlock.module.scss';
import { IArticleImageBlock } from '../../model/types/article';
import { Text } from '@/shared/ui/Text';

interface IImageBlockProps {
  className?: string;
  block: IArticleImageBlock;
}

export const ArticleImageBlock: FC<IImageBlockProps> = memo(({ className, block }) => (
  <div className={cn(s.imageBlock, className)}>
    <div className={s.imageWrapper}>
      <img src={block.src} alt={block.title} className={s.image} />
    </div>
    {block.title && <Text title={block.title} size={12} className={s.title} />}
  </div>
));
