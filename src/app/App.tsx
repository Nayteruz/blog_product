import { Suspense } from 'react';
import { cn } from '@/shared/lib';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Footer } from '@/widgets/Footer';

function App() {
  return (
    <div className={cn('app')}>
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
