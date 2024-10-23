import { StoryFn } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { DeepPartial } from '@/shared/lib';
import { loginReducer } from '@/features/AuthByUserName/model/slice/loginSlice';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
};

export const StoryDecorator = (
  initialState: DeepPartial<StateSchema>,
  asyncReducers?: ReducersMapObject<StateSchema>,
) => (Story: StoryFn) => (
  <StoreProvider
    initialState={initialState}
    asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
  >
    <Story />
  </StoreProvider>
);
