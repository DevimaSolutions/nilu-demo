import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useRouteInfo from '@/hooks/useRouteInfo';
import { getShopInfo, shopStateSelector } from '@/redux/shop';

import type { AppDispatch } from '@/redux/store';

const useShopPage = () => {
  const { pathMatch } = useRouteInfo();
  const dispatch = useDispatch<AppDispatch>();
  const shopInfo = useSelector(shopStateSelector);
  useEffect(() => {
    if (pathMatch?.params.username) {
      dispatch(getShopInfo(pathMatch?.params.username));
    }
  }, [dispatch, pathMatch?.params.username]);

  return shopInfo;
};

export default useShopPage;
