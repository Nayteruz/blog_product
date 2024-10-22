import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { DeepPartial } from '@/shared/lib';

export const StoryDecorator = (initialState: DeepPartial<StateSchema>) => (Story: StoryFn) => (
  <StoreProvider initialState={initialState}>
    <Story />
  </StoreProvider>
);
