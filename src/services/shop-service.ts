import { ShopOption } from '@/redux/shop/types';

import type { IShopState } from '@/redux/shop/types';

const getInfo = (creatorUsername: string) =>
  new Promise<IShopState>((res) =>
    setTimeout(res, 300, {
      creator: { username: creatorUsername, fullName: 'Oil Isykes', image: null, rating: 94 },
      description:
        'Hi! here to make dreamz come true. You can also request a tattoo design instead of message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id lacus risus.',
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
