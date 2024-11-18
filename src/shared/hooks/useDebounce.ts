import { useCallback, useRef } from 'react';

export const useDebounce = <T extends (...args: any[]) => void>(callback: T, delay: number) => {
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeout.current != null) {
        clearTimeout(timeout.current);
      }

      timeout.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );
};
