import {
  CSSProperties, FC, MutableRefObject, ReactNode, useRef 
} from 'react';
import { cn } from '@/shared/lib';
import s from './Page.module.scss';
import { useInfinityScroll } from '@/shared/hooks/useInfinityScroll';

interface IPageProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onScrollEnd?: () => void;
}

export const Page: FC<IPageProps> = (props) => {
  const { className, children, onScrollEnd, style } = props;
  const wrapperRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

  useInfinityScroll({
    triggerRef,
    wrapperRef,
    // eslint-disable-next-line no-console
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} style={style} className={cn(s.page, className)}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
};
