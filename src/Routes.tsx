import { Navigate, Route, Routes as RouterRoutes } from 'react-router-dom';

import routes from '@/config/routes';

function Routes() {
  return (
    <RouterRoutes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </RouterRoutes>
  );
}

export default Routes;
