import { FC, memo } from 'react';
import { cn } from '@/shared/lib';
import s from './CodeBlock.module.scss';
import { Code } from '@/shared/ui/Code/Code';
import { IArticleCodeBlock } from '../../model/types/article';

interface ICodeBlockProps {
  className?: string;
  block: IArticleCodeBlock;
}

export const ArticleCodeBlock: FC<ICodeBlockProps> = memo(({ className, block }) => (
  <Code className={cn(s.codeBlock, className)} text={block.code} />
));
