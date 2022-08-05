import { alpha } from '@mui/material/styles';

import type { Theme } from '@mui/material/styles';

const styles = {
  avatar: {
    width: 32,
    height: 32,
  },
  mediaContainer: {
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
  mediaContainerHighlighted: {
    border: '2px solid',
    borderColor: 'primary.main',
  },
  mediaContainerRed: {
    border: '1px solid',
    borderColor: 'grey.500',
  },
  text: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    color: 'grey.800',
    borderRadius: 3,
    px: 1,
    backgroundColor: (theme: Theme) => alpha(theme.palette.common.white, 0.5),
  },
};
export default styles;
