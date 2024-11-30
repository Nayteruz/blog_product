import { StoryFn } from '@storybook/react';
import { StateSchema, StoryProvider } from '@/app/providers/StoryProvider';
import { ReducersList } from '@/shared/hooks/useDynamicReducer';
import { loginReducer } from '@/features/AuthByUserName';
import { profileReducer } from '@/entities/Profile';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage';
import { articleDetailsReducer } from '@/entities/Article';
import { addCommentFormReducer } from '@/features/AddCommentForm';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoryDecorator =
  (initialState: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (Story: StoryFn) => (
    <StoryProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
      <Story />
    </StoryProvider>
  );
