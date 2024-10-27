import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';
import { useEffect } from 'react';
import { ReduxStoreWithManager, StateSchemaKey } from '@/app/providers/StoryProvider/config/StateSchema';
import { useAppDispatch } from './useAppDispatch';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

export const useDynamicReducer = (reducer: ReducersList, removeAfterUnmount: boolean = true) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducer).forEach(([name, reducerItem]) => {
      const key = name as StateSchemaKey;
      if (reducerItem) {
        store.reducerManager.add(key, reducerItem);
        dispatch({ type: `@INIT ${key} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducer).forEach(([name]) => {
          const key = name as StateSchemaKey;
          store.reducerManager.remove(key);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
