import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { StoryProvider } from './app/providers/StoryProvider';
import App from './app/App';
import './app/styles/index.scss';
import './shared/config/i18n/i18n';

const domNode = document.getElementById('root');
const root = createRoot(domNode!);

root.render(
  <BrowserRouter>
    <StoryProvider>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoryProvider>
  </BrowserRouter>,
);
