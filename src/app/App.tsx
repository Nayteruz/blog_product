import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Footer } from '@/widgets/Footer';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { getUserInited, userActions } from '@/entities/User';

// https://blog-prod.netlify.app/  мое приложение в сети

const App = () => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={cn('app')}>
      <div className="wrapper">
        <Suspense fallback="">
          <Navbar />
          <Sidebar />
          {inited && <AppRouter />}
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
