import { dimensions } from '@/config/theme';

import type { Theme } from '@mui/material/styles';
const styles = {
  container: {
    position: 'fixed',
    display: 'flex',
    zIndex: 1,
    backgroundColor: 'common.white',
    width: '100%',
    maxWidth: '600px',
    height: dimensions.headerHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    px: 2,
    transition: 'outline 300ms ease',
  },
  bottomShadow: {
    outline: (theme: Theme) => `2px solid ${theme.palette.grey[400]}`,
  },
} as const;

export default styles;
