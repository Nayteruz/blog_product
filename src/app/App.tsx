import { Suspense } from 'react';
import { cn } from '@/shared/lib';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Footer } from '@/widgets/Footer';
import './styles/index.scss';

function App() {
  const { theme } = useTheme();

  return (
    <div className={cn('app', theme)}>
      <div className="wrapper">
        <Suspense fallback="">
          <Navbar />
          <Sidebar />
          <AppRouter />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
