import type { IVideoSubmitInfo } from '@/components/ChatVideoUploadScreen';

export interface IPrivateMessageChatScreenProps {
  video: IVideoSubmitInfo;
  onGoBack: () => void;
}
