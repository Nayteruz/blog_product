import { Suspense, useEffect } from 'react';
import { cn } from '@/shared/lib';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Footer } from '@/widgets/Footer';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { userActions } from '@/entities/User';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

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
