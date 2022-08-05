import type { IVideoSubmitInfo } from '@/components/ChatVideoUploadScreen';

export interface INewChatHistoryProps {
  sentVideo: IVideoSubmitInfo;
  isPending: boolean;
}
