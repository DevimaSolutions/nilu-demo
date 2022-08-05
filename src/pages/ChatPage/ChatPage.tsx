import { Stack } from '@mui/material';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import ChatVideoUploadScreen from '@/components/ChatVideoUploadScreen';
import PrivateMessageChatScreen from '@/components/PrivateMessageChatScreen';
import fadeQuick from '@/config/transitions/fade-quick';

import useChatPage from './useChatPage';

const ChatPage = () => {
  const { video, onVideoSubmit, onGoBackToVideoUpload } = useChatPage();

  return (
    <Stack flexGrow={1} sx={fadeQuick}>
      <SwitchTransition>
        <CSSTransition
          key={video ? 'PrivateMessageChatScreen' : 'ChatVideoUploadScreen'}
          addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
          classNames="fade-quick"
          timeout={100}
        >
          {video ? (
            <PrivateMessageChatScreen video={video} onGoBack={onGoBackToVideoUpload} />
          ) : (
            <ChatVideoUploadScreen onVideoSubmit={onVideoSubmit} />
          )}
        </CSSTransition>
      </SwitchTransition>
    </Stack>
  );
};

export default ChatPage;
