import { Avatar, Stack, Typography, Box } from '@mui/material';

import { getUserInitials } from '@/utils/get-user-initials';
import mergeSx from '@/utils/merge-sx';

import styles from './styles';

import type { IChatMediaMessageProps } from './types';

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
        sx={{ ...styles.avatar, backgroundColor: position === 'left' ? 'grey.600' : 'orange.main' }}
      >
        {sender?.fullName ? getUserInitials(sender.fullName) : undefined}
      </Avatar>
      <Box
        sx={mergeSx(
          styles.mediaContainer,
          isHighlighted ? styles.mediaContainerHighlighted : styles.mediaContainerRed,
        )}
      >
        {mediaType === 'video' && <video autoPlay loop src={src} />}
        {mediaType === 'image' && <img alt={text} src={src} />}
        <Typography sx={styles.text}>{text}</Typography>
      </Box>
    </Stack>
  );
};

export default ChatMediaMessage;
