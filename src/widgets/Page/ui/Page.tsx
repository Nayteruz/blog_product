import {
  CSSProperties, FC, MutableRefObject, ReactNode, useRef, UIEvent, useCallback 
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib';
import { useInfinityScroll } from '@/shared/hooks/useInfinityScroll';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { getUIScrollByPath, uiSliceActions } from '@/features/UI';
import { StateSchema } from '@/app/providers/StoryProvider';
import { useInitialEffect } from '@/shared/hooks/useInitialEffect';
import { useDebounce } from '@/shared/hooks/useDebounce';
import s from './Page.module.scss';

interface IPageProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  onScrollEnd?: () => void;
  isLoading?: boolean;
}

export const Page: FC<IPageProps> = (props) => {
  const {
    className, children, onScrollEnd, style, isLoading 
  } = props;
  const wrapperRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) => getUIScrollByPath(state, pathname));

  useInfinityScroll({
    triggerRef,
    wrapperRef,
    // eslint-disable-next-line no-console
    callback: onScrollEnd,
    isLoading,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useCallback(
    (e: UIEvent<HTMLDivElement>) => {
      dispatch(
        uiSliceActions.setScrollPosition({
          position: (e.target as HTMLDivElement)?.scrollTop || 0,
          path: pathname,
        }),
      );
    },
    [dispatch, pathname],
  );

  const scrollDebounced = useDebounce(onScroll, 300);

  return (
    <main ref={wrapperRef} style={style} className={cn(s.page, className)} onScroll={scrollDebounced}>
      {children}
      {onScrollEnd && <div className={s.trigger} ref={triggerRef} />}
    </main>
  );
};
