import { FC } from 'react';
import { cn } from '@/shared/lib';
import s from './Text.module.scss';

export const TextTheme = {
  PRIMARY: 'primary',
  ERROR: 'error',
} as const;

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: (typeof TextTheme)[keyof typeof TextTheme];
}

export const Text: FC<ITextProps> = ({
  className, title, text, theme = TextTheme.PRIMARY,
}) => (
  <div className={cn(s.text, s[theme], className)}>
    {title && <p className={s.titleParagraph}>{title}</p>}
    {text && <p className={s.textParagraph}>{text}</p>}
  </div>
);
