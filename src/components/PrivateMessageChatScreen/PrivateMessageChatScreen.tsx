import {
  Avatar,
  Stack,
  Typography,
  Box,
  IconButton,
  Button,
  CircularProgress,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import format from 'date-fns/format';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dialog from '@/components/Dialog';
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon';
import CheckmarkIcon from '@/components/icons/CheckmarkIcon';
import PaymentForm from '@/components/PaymentForm';
import { userSelector } from '@/redux/auth';
import {
  privateMessageResponseSelector,
  shopCreatorSelector,
  simulateCreatorResponse,
  clearPrivateMessageResponse,
  hasPrivateMessageResponseSelector,
} from '@/redux/shop';
import { getUserInitials } from '@/utils/get-user-initials';
import mergeSx from '@/utils/merge-sx';

import DislikeIcon from '../icons/DislikeIcon';
import LikeIcon from '../icons/LikeIcon';

import styles from './styles';

import type { IPrivateMessageChatScreenProps } from './types';
import type { IVideoSubmitInfo } from '@/components/ChatVideoUploadScreen';
import type { IUser } from '@/redux/auth';
import type { AppDispatch } from '@/redux/store';
import type { Theme } from '@mui/material';

export interface IChatMediaMessageProps {
  src?: string;
  sender: IUser;
  position: 'left' | 'right';
  mediaType?: 'image' | 'video';
  isHighlighted?: boolean;
  text?: string;
}
const ChatMediaMessage = ({
  src,
  sender,
  position,
  isHighlighted,
  text,
  mediaType = 'image',
}: IChatMediaMessageProps) => {
  return (
    <Stack
      direction={position === 'left' ? 'row' : 'row-reverse'}
      ml={position === 'left' ? 0 : 'auto'}
      mr={position === 'left' ? 'auto' : 0}
      gap={1.5}
    >
      <Avatar
        alt={sender?.fullName}
        src={sender?.image ?? undefined}
        sx={{
          width: 32,
          height: 32,
          backgroundColor: position === 'left' ? 'grey.600' : 'orange.main',
        }}
      >
        {sender?.fullName ? getUserInitials(sender.fullName) : undefined}
      </Avatar>
      <Box
        sx={mergeSx(
          {
            position: 'relative',
            height: 256,
            minWidth: 156,
            maxWidth: 'calc(100vw - 78px)',
            borderRadius: 3,
            borderColor: 'grey.500',
            backgroundColor: 'grey.300',
            overflow: 'hidden',
            '& > video, & > img': { objectFit: 'cover', height: '100%', width: '100%' },
          },
          isHighlighted
            ? {
                border: '2px solid',
                borderColor: 'primary.main',
              }
            : {
                border: '1px solid',
                borderColor: 'grey.500',
              },
        )}
      >
        {mediaType === 'video' && <video autoPlay loop src={src} />}
        {mediaType === 'image' && <img alt={text} src={src} />}
        <Typography
          sx={{
            position: 'absolute',
            right: 12,
            bottom: 12,
            color: 'grey.800',
            borderRadius: 3,
            px: 1,
            backgroundColor: (theme: Theme) => alpha(theme.palette.common.white, 0.5),
          }}
        >
          {text}
        </Typography>
      </Box>
    </Stack>
  );
};

export interface INewChatHistoryProps {
  sentVideo: IVideoSubmitInfo;
  isPending: boolean;
}
const NewChatHistory = ({ isPending, sentVideo }: INewChatHistoryProps) => {
  const [postTime, setPostTime] = useState<string | null>(null);
  const user = useSelector(userSelector);
  const creator = useSelector(shopCreatorSelector);
  const responseMessage = useSelector(privateMessageResponseSelector);

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
    <Stack alignItems="center" gap={3.5} flexGrow={1} pb={31} width="100%">
      <Typography mt={3} textAlign="center">
        <strong>You</strong> are going to send a message to{' '}
        <strong>{creator?.username ?? '...'}</strong>
      </Typography>
      <ChatMediaMessage
        src={sentVideo.src}
        mediaType="video"
        sender={user}
        position="right"
        text={postTime ?? 'Preparing...'}
        isHighlighted={!responseMessage}
      />
      {responseMessage !== null && creator !== null && (
        <ChatMediaMessage
          src={responseMessage.src}
          mediaType="image"
          sender={creator}
          position="left"
          text={format(responseMessage.time, 'E, H:mm')}
          isHighlighted
        />
      )}
    </Stack>
  );
};

export interface IChatActionsProps {
  isPaymentSucceeded: boolean;
  onGoBack: () => void;
  onPaymentSucceeded: () => void;
}
const ChatActions = ({ onGoBack, isPaymentSucceeded, onPaymentSucceeded }: IChatActionsProps) => {
  const [isLoading, setLoading] = useState(false);
  const [isPaymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [isChatLiked, setChatLiked] = useState(false);
  const creator = useSelector(shopCreatorSelector);
  const hasResponseMessage = useSelector(hasPrivateMessageResponseSelector);

  const onConfirm = () => {
    setLoading(true);
    // Show payment modal
    setPaymentDialogOpen(true);
  };

  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={{
        position: 'fixed',
        bottom: 0,
        px: 3,
        pt: 0.75,
        pb: 3,
        minWidth: { xs: '100vw', sm: '600px' },
        mx: { xs: 0, sm: 'auto' },
      }}
    >
      {isChatLiked ? (
        <>
          <LikeIcon />
          <Typography mt={2.5} mb={3} textAlign="center">
            Great! You liked this chat. You can also say thanks to{' '}
            <strong>{creator?.username}</strong>
          </Typography>
          <Button variant="contained" fullWidth>
            Say thanks
          </Button>
        </>
      ) : hasResponseMessage ? (
        <>
          <Typography textAlign="center">
            Hey, your respond is here! How it was? Rate <strong>{creator?.username}</strong> respond
          </Typography>
          <Stack direction="row" sx={styles.controls}>
            <IconButton sx={styles.secondaryButton}>
              <DislikeIcon width={28} height={28} />
            </IconButton>
            <IconButton sx={styles.secondaryButton} onClick={() => setChatLiked(true)}>
              <LikeIcon width={28} height={28} />
            </IconButton>
          </Stack>
        </>
      ) : isPaymentSucceeded ? (
        <>
          <LikeIcon />
          <Typography mt={2.5} mb={3} textAlign="center">
            Your message was sent to <strong>{creator?.username}</strong>. Average respond time is{' '}
            <strong>20 minutes</strong>.
          </Typography>
          <Button variant="contained" fullWidth>
            Go to inbox
          </Button>
        </>
      ) : (
        <>
          <Typography mt={3} textAlign="center">
            Confirm <strong>if this is the correct video.</strong>
            <br />
            If not - go back and try again.
          </Typography>
          <Stack direction="row" sx={styles.controls}>
            <IconButton sx={styles.backButton} color="error" onClick={onGoBack}>
              <ArrowLeftIcon />
            </IconButton>
            <IconButton
              sx={mergeSx(styles.primaryButton, isLoading ? styles.loadingButton : null)}
              onClick={onConfirm}
            >
              {isLoading ? (
                <CircularProgress size={24} />
              ) : (
                <CheckmarkIcon width={28} height={28} />
              )}
            </IconButton>
          </Stack>
        </>
      )}
      <Dialog
        open={isPaymentDialogOpen}
        onClose={() => {
          setPaymentDialogOpen(false);
          setLoading(false);
        }}
      >
        <PaymentForm
          onSuccess={() => {
            setPaymentDialogOpen(false);
            onPaymentSucceeded();
          }}
        />
      </Dialog>
    </Stack>
  );
};

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
