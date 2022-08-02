import { ShopOption } from '@/redux/shop/types';

import type { IShopState } from '@/redux/shop/types';

const getInfo = (creatorUsername: string) =>
  new Promise<IShopState>((res) =>
    setTimeout(res, 300, {
      creator: { username: creatorUsername, image: null },
      products: {
        [ShopOption.PrivateMessage]: { price: 25 },
        [ShopOption.OneToOneSession]: { price: 150 },
        [ShopOption.PremiumContent]: { price: 45 },
      },
    }),
  );

const shopService = {
  getInfo,
};

export default shopService;
