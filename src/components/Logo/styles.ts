import type { Theme } from '@mui/material/styles';

const styles = {
  logo: {
    display: 'flex',
    alignItems: 'flex-end',
    textDecoration: 'none',
  },
  icon: {
    borderRadius: 2,
    width: 26,
    height: 26,
    mr: 1,
    backgroundColor: (theme: Theme) => theme.palette.grey[500],
  },
} as const;

export default styles;
