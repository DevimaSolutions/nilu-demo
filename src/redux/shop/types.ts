import type { IUser } from '@/redux/auth';

export interface ICreator extends IUser {
  rating: number;
}

export enum ShopOption {
  PrivateMessage,
  OneToOneSession,
  PremiumContent,
}

export interface IShopProductOptions {
  id: string;
  name: string;
  price: number;
}

export interface IShopProductInfo {
  price: number;
  options: IShopProductOptions[];
}

export type IShopProducts = Record<ShopOption, IShopProductInfo | null>;

export interface IPrivateMessageResponse {
  src?: string;
  text?: string;
  time: Date;
}
export interface IShopState {
  creator: ICreator | null;
  description: string | null;
  products: IShopProducts;
  selectedProductOption: IShopProductOptions | null;
  privateMessageResponse: IPrivateMessageResponse | null;
}
