import { MutableRefObject, useEffect } from 'react';

export interface IUseInfinityScroll {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
  isLoading?: boolean;
}

export const useInfinityScroll = ({ callback, triggerRef, wrapperRef, isLoading }: IUseInfinityScroll) => {
  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;

    let observer: IntersectionObserver | null = null;
    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback?.();
        }
      }, options);

      observer.observe(triggerElement);
    }

    return () => {
      if (observer && triggerElement) {
        observer.disconnect();
      }
    };
  }, [callback, triggerRef, wrapperRef, isLoading]);
};