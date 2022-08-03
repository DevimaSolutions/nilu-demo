import useRouteInfo from '@/hooks/useRouteInfo';
import useScrolledToTop from '@/hooks/useScrolledToTop';

const useHeader = () => {
  const { routeInfo } = useRouteInfo();
  const isScrolledToTop = useScrolledToTop();

  return {
    pageTitle: routeInfo?.title,
    canGoBack: routeInfo?.canGoBack ?? false,
    hasShadow: !isScrolledToTop || (routeInfo?.alwaysHasShadowUnderHeader ?? false),
  };
};

export default useHeader;
