import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ShopOption, shopStateSelector } from '@/redux/shop';

import type { IShopProductOptions } from '@/redux/shop';

const usePrivateMessagePage = () => {
  const { creator, description, products } = useSelector(shopStateSelector);
  const navigate = useNavigate();

  const onSelectOption = (option: IShopProductOptions) => () => {
    // Only handle private message click
    if (option.id !== '1') {
      return;
    }
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
