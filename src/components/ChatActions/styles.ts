import { circularProgressClasses } from '@mui/material/CircularProgress';
import { alpha } from '@mui/material/styles';

import fade from '@/config/transitions/fade';

import type { Theme } from '@mui/material';

const styles = {
  controls: {
    mt: 1,
    mb: 2.25,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  primaryButton: {
    color: 'common.white',
    backgroundColor: 'primary.main',
    border: '6px solid',
    borderColor: 'primary.light',
    p: 2.25,
    '&:hover, &:active, &:focus': {
      backgroundColor: (theme: Theme) => alpha(theme.palette.primary.main, 0.9),
    },
    [`& .${circularProgressClasses.root}`]: {
      color: 'common.white',
    },
  },
  secondaryButton: {
    color: 'grey.900',
    border: '1px solid',
    borderColor: 'grey.500',
    p: 2.25,
  },
  backButton: {
    color: 'error',
    border: '1px solid',
    borderColor: 'error',
    p: 2,
    '& > svg': {
      fontSize: '1rem',
    },
  },
  loadingButton: {
    opacity: 0.65,
  },
  container: {
    position: 'fixed',
    bottom: 0,
    px: 3,
    pt: 0.75,
    pb: 3,
    minWidth: { xs: '100vw', sm: '600px' },
    mx: { xs: 0, sm: 'auto' },
    background: 'linear-gradient(180deg, transparent 0px, white 12px)',
    ...fade,
  },
} as const;

export default styles;
