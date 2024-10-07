import { Suspense, useEffect } from 'react';
import { cn } from '@/shared/lib';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Footer } from '@/widgets/Footer';
import './styles/index.scss';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    if (Math.random() > 0.5) {
      throw new Error('test error');
    }
  }, [theme]);

  return (
    <div className={cn('app', theme)}>
      <Suspense fallback="">
        <Navbar />
        <Sidebar />
        <AppRouter />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
