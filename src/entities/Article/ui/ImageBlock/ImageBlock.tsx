import { FC, memo } from 'react';
import { IArticleImageBlock } from '../../model/types/article';
import { Text, VStack } from '@/shared/ui';
import s from './ImageBlock.module.scss';

interface IImageBlockProps {
  className?: string;
  block: IArticleImageBlock;
}

export const ArticleImageBlock: FC<IImageBlockProps> = memo(({ className, block }) => (
  <VStack align="center" className={className}>
    <div className={s.imageWrapper}>
      <img src={block.src} alt={block.title} className={s.image} />
    </div>
    {block.title && <Text title={block.title} size={12} className={s.title} />}
  </VStack>
));
