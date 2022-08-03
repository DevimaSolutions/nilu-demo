import { useMemo } from 'react';
import { matchPath, useLocation } from 'react-router-dom';

import routes, { routesMap } from '@/config/routes';

const useRouteInfo = () => {
  const location = useLocation();
  const routeInfo = useMemo(() => {
    for (const route of routes) {
      const match = matchPath(route.path, location.pathname);
      if (match) {
        return { pathMatch: match, routeInfo: routesMap.get(match.pattern.path) ?? null };
      }
    }
    return { pathMatch: null, routeInfo: null };
  }, [location]);
  return routeInfo;
};

export default useRouteInfo;
