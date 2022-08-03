import { ChatPage, HomePage, PrivateMessagePage, ShopPage } from '@/pages';

import type { IRoute } from './types';

const routes: IRoute[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/shop/:username',
    element: <ShopPage />,
  },
  {
    path: '/private-message/:username',
    title: 'Private message',
    element: <PrivateMessagePage />,
    canGoBack: true,
    alwaysHasShadowUnderHeader: true,
  },
  {
    path: '/chat/:username',
    title: 'Private message',
    element: <ChatPage />,
    canGoBack: true,
    alwaysHasShadowUnderHeader: true,
  },
];

export const routesMap = routes.reduce((map, route) => {
  map.set(route.path, route);
  return map;
}, new Map<string, IRoute>());

export default routes;
