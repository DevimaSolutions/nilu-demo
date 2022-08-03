import { dimensions } from '@/config/theme';

import type { Theme } from '@mui/material';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 600,
    minHeight: '100%',
    margin: 'auto',
    backgroundColor: (theme: Theme) => theme.palette.common.white,
    '& > main': {
      flexGrow: 1,
      px: 2,
      pt: dimensions.headerHeight / 8,
      pb: 3,
    },
  },
} as const;

export default styles;
