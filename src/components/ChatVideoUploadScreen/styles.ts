import { circularProgressClasses } from '@mui/material/CircularProgress';
import { alpha } from '@mui/material/styles';

import type { Theme } from '@mui/material';

const styles = {
  avatar: (theme: Theme) => ({
    backgroundColor: 'grey.600',
    width: 56,
    height: 56,
    mt: 5.75,
    mb: 3,
    ...theme.typography.subtitle2,
  }),
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
    p: 1.5,
  },
  loadingButton: {
    opacity: 0.65,
  },
} as const;

export default styles;
