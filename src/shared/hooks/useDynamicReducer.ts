import { Reducer } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';
import { useEffect } from 'react';
import { ReduxStoreWithManager, StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema';
import { useAppDispatch } from './useAppDispatch';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

type ReducerListEntry = [StateSchemaKey, Reducer];

export const useDynamicReducer = (reducer: ReducersList, removeAfterUnmount: boolean = true) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Object.entries(reducer).forEach(([name, reducerItem]: ReducerListEntry) => {
      store.reducerManager.add(name, reducerItem);
      dispatch({ type: `@INIT ${name} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducer).forEach(([name, reducerItem]: ReducerListEntry) => {
          store.reducerManager.remove(name);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
