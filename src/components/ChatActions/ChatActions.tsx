import { Stack, Typography, IconButton, Button, CircularProgress } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import Dialog from '@/components/Dialog';
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon';
import CheckmarkIcon from '@/components/icons/CheckmarkIcon';
import DislikeIcon from '@/components/icons/DislikeIcon';
import LikeIcon from '@/components/icons/LikeIcon';
import PaymentForm from '@/components/PaymentForm';
import { shopCreatorSelector, hasPrivateMessageResponseSelector } from '@/redux/shop';
import mergeSx from '@/utils/merge-sx';

import styles from './styles';

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
    <Stack direction="column" alignItems="center" sx={styles.container}>
      <SwitchTransition>
        <CSSTransition
          key={
            isChatLiked
              ? 'isChatLiked'
              : hasResponseMessage
              ? 'hasResponseMessage'
              : isPaymentSucceeded
              ? 'isPaymentSucceeded'
              : 'initial'
          }
          addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
          classNames="fade"
          timeout={300}
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
                Hey, your respond is here! How it was? Rate <strong>{creator?.username}</strong>{' '}
                respond
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
                Your message was sent to <strong>{creator?.username}</strong>. Average respond time
                is <strong>20 minutes</strong>.
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
        </CSSTransition>
      </SwitchTransition>
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

export default ChatActions;
