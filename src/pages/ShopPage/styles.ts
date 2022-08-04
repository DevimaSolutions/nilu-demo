import type { Theme } from '@mui/material/styles';

const styles = {
  productGrid: {
    py: 1.75,
  },
  tabPanels: {
    width: '100%',
  },
  tabs: {
    width: '100%',
  },
  likeIcon: {
    mb: -0.375,
  },
  avatar: (theme: Theme) => ({
    backgroundColor: 'grey.600',
    width: 64,
    height: 64,
    ...theme.typography.subtitle1,
  }),
} as const;

export default styles;
