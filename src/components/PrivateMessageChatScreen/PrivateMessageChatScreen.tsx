import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import ChatActions from '@/components/ChatActions';
import NewChatHistory from '@/components/NewChatHistory';
import { simulateCreatorResponse, clearPrivateMessageResponse } from '@/redux/shop';

import type { IPrivateMessageChatScreenProps } from './types';
import type { AppDispatch } from '@/redux/store';

const PrivateMessageChatScreen = ({ video, onGoBack }: IPrivateMessageChatScreenProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [isPaymentSucceeded, setPaymentSucceeded] = useState(false);

  useEffect(() => {
    if (isPaymentSucceeded) {
      dispatch(simulateCreatorResponse());
      return () => {
        dispatch(clearPrivateMessageResponse());
      };
    }
  }, [dispatch, isPaymentSucceeded]);

  return (
    <Stack alignItems="center" flexGrow={1}>
      <NewChatHistory sentVideo={video} isPending={!isPaymentSucceeded} />
      <ChatActions
        onGoBack={onGoBack}
        isPaymentSucceeded={isPaymentSucceeded}
        onPaymentSucceeded={() => setPaymentSucceeded(true)}
      />
    </Stack>
  );
};

export default PrivateMessageChatScreen;
