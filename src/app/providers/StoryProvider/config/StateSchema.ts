// eslint-disable-next-line
import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CombinedState } from 'redux';
import type { IUserSchema } from '@/entities/User';
import type { IProfileSchema } from '@/entities/Profile';
import type { ILoginSchema } from '@/features/AuthByUserName';
import type { IArticleDetailsSchema } from '@/entities/Article';
import type { IAddCommentFormSchema } from '@/features/AddCommentForm';
import { IArticlesPageSchema } from '@/pages/ArticlesPage';
import { IUISchema } from '@/features/UI';
import { IArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';

export interface StateSchema {
  user: IUserSchema;
  ui: IUISchema;
  // Async reducers
  loginForm?: ILoginSchema;
  profile?: IProfileSchema;
  articleDetails?: IArticleDetailsSchema;
  addCommentForm?: IAddCommentFormSchema;
  articlesPage?: IArticlesPageSchema;
  articleDetailsPage?: IArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - вмонтирован, false - демонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
