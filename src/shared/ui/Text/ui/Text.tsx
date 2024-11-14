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

const TextSize = {
  S: 12,
  M: 16,
  L: 24,
  XL: 36,
} as const;

const sizeClass = {
  [TextSize.S]: 'sizeS',
  [TextSize.M]: 'sizeM',
  [TextSize.L]: 'sizeL',
  [TextSize.XL]: 'sizeXl',
};

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: (typeof TextTheme)[keyof typeof TextTheme];
  align?: (typeof TextAlign)[keyof typeof TextAlign];
  size?: (typeof TextSize)[keyof typeof TextSize];
}

export const Text: FC<ITextProps> = memo((props) => {
  const {className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT, size = TextSize.M,} = props;
  const mods = [s[theme], s[align]];

  return (
    <div className={cn(s.textComponent, ...mods, s[sizeClass[size]], className)}>
      {title && <h3 className={s.title}>{title}</h3>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
});
