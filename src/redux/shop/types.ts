export interface ICreator {
  username: string;
  image: string | null;
  rating: number;
}

export enum ShopOption {
  PrivateMessage,
  OneToOneSession,
  PremiumContent,
}

export interface IShopProductInfo {
  price: number;
}

export type IShopProducts = Record<ShopOption, IShopProductInfo | null>;

export interface IShopState {
  creator: ICreator | null;
  products: IShopProducts;
}