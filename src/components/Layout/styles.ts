import { dimensions } from '@/config/theme';
import slide from '@/config/transitions/slide';

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
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'grid',
      gridTemplate: 'main',
      flex: 1,
      backgroundColor: 'common.white',
      '& > div:first-of-type': {
        zIndex: 1,
      },
      '& > div': {
        px: 2,
        pt: dimensions.headerHeight / 8,
        pb: 3,
        gridArea: 'main' /* Transition: make sections overlap on same cell */,
        flex: '1 1 auto',
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'common.white',
        width: { xs: '100vw', sm: '600px' },
      },
    },
    ...slide,
  },
} as const;

export default styles;
