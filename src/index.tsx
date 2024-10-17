import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider';
import App from './app/App';
import './app/styles/index.scss';

import './shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { StoreProvider } from './app/providers/StoreProvider';

const domNode = document.getElementById('root');
const root = createRoot(domNode!);

root.render(
  <StoreProvider>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </StoreProvider>,
);
