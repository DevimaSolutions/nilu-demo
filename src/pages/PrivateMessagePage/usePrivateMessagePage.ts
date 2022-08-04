import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { selectProductOption, ShopOption, shopStateSelector } from '@/redux/shop';

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

  return {
    creator,
    description,
    options: products[ShopOption.PrivateMessage]?.options ?? [],
    onSelectOption,
  };
};

export default usePrivateMessagePage;
