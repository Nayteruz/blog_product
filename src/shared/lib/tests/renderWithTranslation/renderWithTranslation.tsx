import { ReactNode } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import testI18n from '../../../config/i18n/i18nForTest';

// eslint-disable-next-line max-len
export const renderWithTranslation = (component: ReactNode) =>
  render(<I18nextProvider i18n={testI18n}>{component}</I18nextProvider>);
