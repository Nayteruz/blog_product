import { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppRoutes, RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { getUserAuthData } from '@/entities/User';

interface IRequireAuthProps {
  children: ReactNode;
}

export const RequireAuth: FC<IRequireAuthProps> = ({ children }) => {
  const auth = useSelector(getUserAuthData);

  if (!auth) {
    return <Navigate to={RoutePath[AppRoutes.MAIN]} replace />;
  }

  return children;
};
