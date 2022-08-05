import fadeQuick from '@/config/transitions/fade-quick';

import type { Theme } from '@mui/material';

const styles = {
  container: {
    minWidth: 75,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& > button': {
      flexShrink: 0,
    },
    ...fadeQuick,
  },
  avatarButton: {
    p: 0,
    ml: 1.75,
  },
  avatarIcon: (theme: Theme) => ({
    width: 30,
    height: 30,
    bgcolor: 'grey.700',
    ...theme.typography.caption,
  }),
  notificationIcon: {
    p: 0.375,
    '& > svg': {
      width: 30,
      height: 30,
      color: 'grey.900',
    },
  },
};

export default styles;
