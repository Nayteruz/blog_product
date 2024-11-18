import { useLayoutEffect } from 'react';

export const useInitialEffect = (callback: () => void, dependencies: any[] = []) => {
  useLayoutEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      callback();
    }
    // eslint-disable-next-line
  }, [...dependencies]);
};
