import { CSSProperties, FC, memo } from 'react';
import { cn } from '../../../lib';
import s from './Text.module.scss';

type THeaderTagType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const TextTheme = {
  PRIMARY: 'primary',
  INVERTED: 'inverted',
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

const mapSizeToHeaderTag: Record<(typeof TextSize)[keyof typeof TextSize], THeaderTagType> = {
  [TextSize.S]: 'h4',
  [TextSize.M]: 'h3',
  [TextSize.L]: 'h2',
  [TextSize.XL]: 'h1',
};

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: (typeof TextTheme)[keyof typeof TextTheme];
  align?: (typeof TextAlign)[keyof typeof TextAlign];
  size?: (typeof TextSize)[keyof typeof TextSize];
  style?: CSSProperties;
}

export const Text: FC<ITextProps> = memo((props) => {
  const {
    className, title, text, theme = TextTheme.PRIMARY, align = TextAlign.LEFT, size = TextSize.M, style 
  } = props;
  const mods = [s[theme], s[align]];
  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div className={cn(s.textComponent, ...mods, s[sizeClass[size]], className)} style={style}>
      {title && <HeaderTag className={s.title}>{title}</HeaderTag>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
});
