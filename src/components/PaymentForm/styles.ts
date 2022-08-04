import { alpha } from '@mui/material/styles';

import type { Theme } from '@mui/material';

const styles = {
  avatar: {
    width: 32,
    height: 32,
    backgroundColor: 'grey.600',
  },
  toMessage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    my: 3,
    gap: 1,
  },
  buttonContained: {
    color: 'common.white',
    backgroundColor: 'grey.A100',
    mt: 2,
    '&:hover, &:active, &:focus': {
      backgroundColor: (theme: Theme) => alpha(theme.palette.grey.A100, 0.9),
    },
  },
  button: {
    borderRadius: 0.5,
    border: '1px solid',
    borderColor: 'grey.500',
    color: 'grey.900',
    py: 1,
    mt: 1,
  },
  centeredContainer: {
    py: 20,
    width: { xs: 'calc(100vw - 96px)', sm: 504 },
    display: 'flex',
    justifyContent: 'center',
  },
  success: {
    fontSize: 45,
  },
};

export default styles;
