import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import useRouteInfo from '@/hooks/useRouteInfo';
import { getShopInfo, selectProductOption, ShopOption, shopStateSelector } from '@/redux/shop';

import type { IShopProductOptions } from '@/redux/shop';
import type { AppDispatch } from '@/redux/store';

const usePrivateMessagePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { creator, description, products } = useSelector(shopStateSelector);
  const navigate = useNavigate();

  const onSelectOption = (option: IShopProductOptions) => () => {
    // Only handle private message click
    if (option.id !== '1') {
      return;
    }
    dispatch(selectProductOption(option.id));
    navigate(`/chat/${creator?.username}`);
  };

  // load creator info when necessary
  const { pathMatch } = useRouteInfo();
  useEffect(() => {
    if (pathMatch?.params.username) {
      dispatch(getShopInfo(pathMatch?.params.username));
    }
  }, [dispatch, pathMatch?.params.username]);

  return {
    creator,
    description,
    options: products[ShopOption.PrivateMessage]?.options ?? [],
    onSelectOption,
  };
};

export default usePrivateMessagePage;
