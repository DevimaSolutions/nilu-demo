import { Stack, Typography } from '@mui/material';
import format from 'date-fns/format';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import ChatMediaMessage from '@/components/ChatMediaMessage';
import { userSelector } from '@/redux/auth';
import { privateMessageResponseSelector, shopCreatorSelector } from '@/redux/shop';

import styles from './styles';

import type { INewChatHistoryProps } from './types';

const NewChatHistory = ({ isPending, sentVideo }: INewChatHistoryProps) => {
  const [postTime, setPostTime] = useState<string | null>(null);
  const user = useSelector(userSelector);
  const creator = useSelector(shopCreatorSelector);
  const responseMessage = useSelector(privateMessageResponseSelector);
  const [hasInitialMount, setInitialMount] = useState(false);
  useEffect(() => {
    setInitialMount(true);
  }, []);

  useEffect(() => {
    if (responseMessage) {
      // scroll to bottom when new message appear
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  }, [responseMessage]);

  useEffect(() => {
    if (!isPending) {
      setPostTime(format(new Date(), 'E, H:mm'));
    }
  }, [isPending]);
  return (
    <Stack alignItems="center" gap={3.5} flexGrow={1} pb={31} width="100%" sx={styles.container}>
      <Typography mt={3} textAlign="center">
        <strong>You</strong> are going to send a message to{' '}
        <strong>{creator?.username ?? '...'}</strong>
      </Typography>
      <CSSTransition in={hasInitialMount} timeout={300} classNames="fade-delayed" unmountOnExit>
        <ChatMediaMessage
          src={sentVideo.src}
          mediaType="video"
          sender={user}
          position="right"
          text={postTime ?? 'Preparing...'}
          isHighlighted={!responseMessage}
        />
      </CSSTransition>
      <CSSTransition in={!!responseMessage} timeout={300} classNames="fade-delayed" unmountOnExit>
        <>
          {responseMessage !== null && creator !== null && (
            <ChatMediaMessage
              src={responseMessage.src}
              mediaType="image"
              sender={creator}
              position="left"
              text={format(new Date(responseMessage.time), 'E, H:mm')}
              isHighlighted
            />
          )}
        </>
      </CSSTransition>
    </Stack>
  );
};

export default NewChatHistory;
