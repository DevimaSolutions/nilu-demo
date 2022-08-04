import ChatVideoUploadScreen from '@/components/ChatVideoUploadScreen';
import PrivateMessageChatScreen from '@/components/PrivateMessageChatScreen';

import useChatPage from './useChatPage';

const ChatPage = () => {
  const { video, onVideoSubmit, onGoBackToVideoUpload } = useChatPage();

  return (
    <>
      {video ? (
        <PrivateMessageChatScreen video={video} onGoBack={onGoBackToVideoUpload} />
      ) : (
        <ChatVideoUploadScreen onVideoSubmit={onVideoSubmit} />
      )}
    </>
  );
};

export default ChatPage;
