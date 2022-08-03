import type { IShopProductInfo, ShopOption } from '@/redux/shop';
import type { ButtonProps, SvgIconProps } from '@mui/material';
import type { FC } from 'react';

export interface IShopProductCardProps extends IShopProductInfo {
  type: ShopOption;
}

export interface ICardInfo {
  icon: FC<SvgIconProps>;
  color: ButtonProps['color'];
  caption: string;
  buttonText: string;
  pricePostfix: string;
  createLink: (username?: string) => string | null;
}
