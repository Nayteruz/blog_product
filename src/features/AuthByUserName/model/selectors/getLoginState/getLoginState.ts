import { createSelector } from 'reselect';
import { StateSchema } from '@/app/providers/StoryProvider';

export const getLoginState = createSelector(
  (state: StateSchema) => state?.loginForm,
  loginForm => loginForm || {
    username: '',
    password: '',
    error: '',
    isLoading: false,
  },
);
