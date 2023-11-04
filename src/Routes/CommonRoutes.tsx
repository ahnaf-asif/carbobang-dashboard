import { RouteType } from './Types';
import { Dashboard, Home } from '@/Pages';

export const CommonRoutes: RouteType[] = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
];
