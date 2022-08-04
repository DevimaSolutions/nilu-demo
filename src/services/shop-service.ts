import { ShopOption } from '@/redux/shop/types';

import type { IShopState } from '@/redux/shop/types';

const getInfo = (creatorUsername: string) =>
  new Promise<IShopState>((res) =>
    setTimeout(res, 300, {
      creator: { username: creatorUsername, fullName: 'Oil Isykes', image: null, rating: 94 },
      description:
        'Hi! here to make dreamz come true. You can also request a tattoo design instead of message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id lacus risus.',
      products: {
        [ShopOption.PrivateMessage]: {
          price: 25,
          options: [
            { id: '1', name: 'Private message', price: 25 },
            { id: '2', name: 'Song request', price: 65 },
            { id: '3', name: 'Singer consultation', price: 150 },
          ],
        },
        [ShopOption.OneToOneSession]: { price: 150, options: [] },
        [ShopOption.PremiumContent]: { price: 45, options: [] },
      },
    }),
  );

const shopService = {
  getInfo,
};

export default shopService;
