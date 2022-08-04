import { Avatar, CircularProgress, IconButton, Stack, Typography } from '@mui/material';

import MessagingIcon from '@/components/icons/MessagingIcon';
import MicrophoneIcon from '@/components/icons/MicrophoneIcon';
import VideoIcon from '@/components/icons/VideoIcon';
import { getUserInitials } from '@/utils/get-user-initials';
import mergeSx from '@/utils/merge-sx';

import styles from './styles';
import useChatVideoUploadScreen from './useChatVideoUploadScreen';

import type { IChatVideoUploadScreenProps } from './types';

const ChatVideoUploadScreen = ({ onVideoSubmit }: IChatVideoUploadScreenProps) => {
  const { creator, selectedProductOption, error, isLoading, onUploadVideo } =
    useChatVideoUploadScreen(onVideoSubmit);

  return (
    <Stack alignItems="center" flexGrow={1}>
      <Avatar alt={creator?.fullName} src={creator?.image ?? undefined} sx={styles.avatar}>
        {creator?.fullName ? getUserInitials(creator.fullName) : undefined}
      </Avatar>
      <Typography variant="body2" textAlign="center">
        Start your conversation with
        <br />
        {creator ? <strong>{creator.username}</strong> : <>&nbsp;</>}
      </Typography>
      <Typography variant="subtitle1" textAlign="center" mt={3} mb="auto">
        You will pay{' '}
        <Typography component="strong" variant="subtitle2" fontWeight={600}>
          ${selectedProductOption?.price ?? 25}
        </Typography>{' '}
        for this message
      </Typography>
      <Typography textAlign="center">
        Tap <strong>Video</strong> button to upload your video. <br />
        Video length limit is <strong>30 seconds</strong>
      </Typography>
      <Typography color="error">{error ?? <>&nbsp;</>}</Typography>
      <Stack direction="row" sx={styles.controls}>
        <IconButton sx={styles.secondaryButton}>
          <MessagingIcon width={24} height={24} />
        </IconButton>
        <IconButton
          sx={mergeSx(styles.primaryButton, isLoading ? styles.loadingButton : null)}
          aria-label="upload video"
          component="label"
        >
          <input hidden accept="video/*" type="file" onChange={onUploadVideo} />
          {isLoading ? <CircularProgress size={24} /> : <VideoIcon width={28} height={28} />}
        </IconButton>
        <IconButton sx={styles.secondaryButton}>
          <MicrophoneIcon width={24} height={24} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default ChatVideoUploadScreen;
