import { ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import testI18n from '@/shared/config/i18n/i18nForTest';
import { StateSchema, StoryProvider } from '@/app/providers/StoryProvider';

export interface IComponentRenderOptions {
  component: ReactNode;
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (options?: IComponentRenderOptions) => {
  if (!options) {
    throw new Error('Options must be provided.');
  }

  const { component, route = '/', initialState } = options;

  render(
    <MemoryRouter initialEntries={[route]}>
      <StoryProvider initialState={initialState}>
        <I18nextProvider i18n={testI18n}>{component}</I18nextProvider>
      </StoryProvider>
    </MemoryRouter>,
  );
};
