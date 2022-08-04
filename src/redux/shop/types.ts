export interface ICreator {
  username: string;
  fullName: string;
  image: string | null;
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

export interface IShopState {
  creator: ICreator | null;
  description: string | null;
  products: IShopProducts;
}
