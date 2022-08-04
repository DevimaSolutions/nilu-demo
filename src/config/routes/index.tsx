import { ChatPage, HomePage, PrivateMessagePage, ShopPage } from '@/pages';

import type { IRoute } from './types';
import type { RootState } from '@/redux/store';

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
  },
  {
    path: '/chat/:username',
    title: (store: RootState) => store.shop.creator?.username ?? '',
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
