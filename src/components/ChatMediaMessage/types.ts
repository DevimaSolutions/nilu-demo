import type { IUser } from '@/redux/auth';

export interface IChatMediaMessageProps {
  src?: string;
  sender: IUser;
  position: 'left' | 'right';
  mediaType?: 'image' | 'video';
  isHighlighted?: boolean;
  text?: string;
}
