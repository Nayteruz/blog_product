import { StoryFn } from '@storybook/react';
import { StateSchema, StoryProvider } from '@/app/providers/StoryProvider';
import { loginReducer } from '@/features/AuthByUserName/model/slice/loginSlice';
import { profileReducer } from '@/entities/Profile';
import { ReducersList } from '@/shared/hooks/useDynamicReducer';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoryDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (Story: StoryFn) => (
  <StoryProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoryProvider>
);
