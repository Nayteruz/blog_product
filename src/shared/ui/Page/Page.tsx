import {
  FC, memo, MutableRefObject, ReactNode, useRef 
} from 'react';
import { cn } from '@/shared/lib';
import s from './Page.module.scss';
import { useInfinityScroll } from '@/shared/hooks/useInfinityScroll';

interface IPageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page: FC<IPageProps> = memo(props => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

  useInfinityScroll({
    triggerRef,
    wrapperRef,
    // eslint-disable-next-line no-console
    callback: onScrollEnd,
  });

  return (
    <section ref={wrapperRef} className={cn(s.page, className)}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
