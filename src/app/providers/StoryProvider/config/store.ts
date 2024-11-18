import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

// eslint-disable-next-line import/no-extraneous-dependencies
import { CombinedState, Reducer } from 'redux';
import { StateSchema, ThunkExtraArg } from './StateSchema';
import { userReducer } from '@/entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api/api';
import { uiSliceReducer } from '@/features/UI';

export const createReduxStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    ui: uiSliceReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = { api: $api };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: { extraArgument: extraArg } }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type RootState = ReturnType<typeof createReduxStore>['getState'];
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
