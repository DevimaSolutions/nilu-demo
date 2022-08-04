import { useSelector } from 'react-redux';

import useRouteInfo from '@/hooks/useRouteInfo';
import useScrolledToTop from '@/hooks/useScrolledToTop';

const useHeader = () => {
  const { routeInfo } = useRouteInfo();
  const isScrolledToTop = useScrolledToTop();

  const ensurePageTitle = routeInfo?.title ?? '';
  const pageTitle = useSelector(
    typeof ensurePageTitle === 'string' ? () => ensurePageTitle : ensurePageTitle,
  );

  return {
    pageTitle,
    canGoBack: routeInfo?.canGoBack ?? false,
    hasShadow: !isScrolledToTop || (routeInfo?.alwaysHasShadowUnderHeader ?? false),
  };
};

export default useHeader;
