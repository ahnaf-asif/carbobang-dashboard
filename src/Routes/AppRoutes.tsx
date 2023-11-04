import { useRoutes } from 'react-router-dom';

import { CommonRoutes } from './CommonRoutes';
import { NotFound } from '@/Pages';

export const AppRoutes = () => {
  return useRoutes([
    ...CommonRoutes
    // {
    //   path: '*',
    //   element: <NotFound />
    // }
  ]);
};
