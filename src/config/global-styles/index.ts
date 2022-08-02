import theme from '@/config/theme';

const globalStyles = {
  body: {
    backgroundColor: theme.palette.common.white,
    [theme.breakpoints.up('sm')]: { backgroundColor: theme.palette.grey[900] },
  },
  '#root': {
    height: '100vh',
  },
} as const;

export default globalStyles;
