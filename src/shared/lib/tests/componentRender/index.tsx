import { ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import { i18nForTest } from '@/shared/config';

export interface IComponentRenderOptions {
  component: ReactNode
  route?: string
}

export const componentRender = (options?: IComponentRenderOptions) => {
  const { component, route = '/' } = options;

  render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTest}>
        {component}
      </I18nextProvider>
    </MemoryRouter>,
  );
};
