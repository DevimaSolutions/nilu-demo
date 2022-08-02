import { Route, Routes as RouterRoutes } from 'react-router-dom';

import { ChatPage, HomePage, PrivateMessagePage, ShopPage } from '@/pages';

function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop">
        <Route path=":username" element={<ShopPage />} />
      </Route>
      <Route path="/private-message">
        <Route path=":username" element={<PrivateMessagePage />} />
      </Route>
      <Route path="/chat">
        <Route path=":username" element={<ChatPage />} />
      </Route>
    </RouterRoutes>
  );
}

export default Routes;
