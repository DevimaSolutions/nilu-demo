import PrivateMessageIcon from '@/components/icons/PrivateMessageIcon';
import SmileIcon from '@/components/icons/SmileIcon';
import ThunderboltIcon from '@/components/icons/ThunderboltIcon';
import { ShopOption } from '@/redux/shop';

import type { ICardInfo } from './types';

export const cardInfo: Record<ShopOption, ICardInfo> = {
  [ShopOption.PrivateMessage]: {
    icon: PrivateMessageIcon,
    color: 'magenta',
    caption: 'Private message',
    buttonText: 'Start a chat',
    pricePostfix: '',
    createLink: (username) => `/private-message/${username}`,
  },
  [ShopOption.OneToOneSession]: {
    icon: SmileIcon,
    color: 'purple',
    caption: '1 to 1 session',
    buttonText: 'Start a session',
    pricePostfix: '/hour',
    createLink: () => null,
  },
  [ShopOption.PremiumContent]: {
    icon: ThunderboltIcon,
    color: 'orange',
    caption: 'Premium content',
    buttonText: 'Subscribe',
    pricePostfix: '/month',
    createLink: () => null,
  },
};
