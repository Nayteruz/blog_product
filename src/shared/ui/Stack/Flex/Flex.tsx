import {
  CSSProperties, DetailedHTMLProps, FC, HTMLAttributes, memo, ReactNode 
} from 'react';
import { cn } from '../../../lib';
import s from './Flex.module.scss';

export type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type FlexAlign = 'stretch' | 'start' | 'center' | 'end';
export type FlexJustify = 'start' | 'center' | 'end' | 'space-between' | 'around' | 'evenly' | 'stretch';
export type FlexWrap = 'nowrap' | 'wrap';
export type FlexGap = '0' | '4' | '8' | '16' | '32' | '48' | '64';

const justifyClasses: Record<FlexJustify, string> = {
  start: s.justifyStart,
  center: s.justifyCenter,
  end: s.justifyEnd,
  'space-between': s.justifyBetween,
  around: s.justifyAround,
  evenly: s.justifyEvenly,
  stretch: s.justifyStretch,
};

const alignClasses: Record<FlexAlign, string> = {
  stretch: s.alignStretch,
  start: s.alignStart,
  center: s.alignCenter,
  end: s.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: s.directionRow,
  column: s.directionColumn,
  'row-reverse': s.directionRowReverse,
  'column-reverse': s.directionColumnReverse,
};

export const gapClasses: Record<number, string> = {
  0: s.gap0,
  4: s.gap4,
  8: s.gap8,
  16: s.gap16,
  32: s.gap32,
  48: s.gap48,
  64: s.gap64,
};

export const wrapClasses: Record<FlexWrap, string> = {
  nowrap: s.flexNoWrap,
  wrap: s.flexWrap,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface IFlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  wrap?: FlexWrap;
  gap?: FlexGap;
  style?: CSSProperties;
}

export const Flex: FC<IFlexProps> = memo((props) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap = 0,
    wrap,
    style,
    ...other
  } = props;

  const classes = [
    s.flex,
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gapClasses[gap],
    wrapClasses[wrap || 'nowrap'],
  ].join(' ');

  return (
    <div className={cn(classes)} style={{ ...style }} {...other}>
      {children}
    </div>
  );
});
