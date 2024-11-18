import { useCallback, useRef } from 'react';

export const useThrottle = <T extends (...args: any[]) => void>(callback: T, ms: number) => {
  const throttleRef = useRef(false);

  return useCallback(
    (...args: Parameters<T>) => {
      if (!throttleRef.current) {
        callback(...args);
        throttleRef.current = true;

        setTimeout(() => {
          throttleRef.current = false;
        }, ms);
      }
    },
    [callback, ms],
  );
};
