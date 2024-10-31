import { FC, memo } from 'react';
import { cn } from '@/shared/lib';
import s from './Text.module.scss';

export const TextTheme = {
  PRIMARY: 'primary',
  ERROR: 'error',
} as const;

const TextAlign = {
  LEFT: 'left',
  RIGHT: 'right',
  CENTER: 'center',
} as const;

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: (typeof TextTheme)[keyof typeof TextTheme];
  align?: (typeof TextAlign)[keyof typeof TextAlign];
}

export const Text: FC<ITextProps> = memo((props) => {
  const {
    className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT,
  } = props;
  const mods = [s[theme], s[align]];

  return (
    <div className={cn(s.text, ...mods, className)}>
      {title && <p className={s.titleParagraph}>{title}</p>}
      {text && <p className={s.textParagraph}>{text}</p>}
    </div>
  );
});
