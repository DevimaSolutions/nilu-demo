import type { Theme } from '@mui/material/styles';

const styles = {
  title: {
    my: 1.75,
    display: 'flex',
    alignItems: 'center',
    '& > strong': {
      fontWeight: 600,
      textDecoration: 'underline',
    },
  },
  avatar: (theme: Theme) => ({
    ml: 1,
    mr: 0.75,
    backgroundColor: 'grey.600',
    width: 30,
    height: 30,
    ...theme.typography.caption,
  }),
  option: (theme: Theme) => ({
    width: '100%',
    px: 1.75,
    py: 1.5,
    display: 'flex',
    alignItems: 'center',
    ...theme.typography.body2,
    fontWeight: 600,
    border: '1px solid',
    borderColor: 'grey.400',
    color: 'grey.A100',
    borderRadius: 1.5,
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.15)',
    '& > span:first-of-type': {
      mr: 'auto',
    },
  }),
  nextIcon: {
    p: 0.25,
    ml: 0.75,
    width: 24,
    height: 24,
    color: 'grey.700',
  },
} as const;

export default styles;
