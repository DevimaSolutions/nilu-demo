export interface IVideoSubmitInfo {
  src: string;
  duration: number;
  width: number;
  height: number;
}
export interface IChatVideoUploadScreenProps {
  onVideoSubmit: (videoInfo: IVideoSubmitInfo) => void;
}
