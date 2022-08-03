import type { Theme } from '@mui/material/styles';

const styles = {
  card: {
    border: (theme: Theme) => `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 2,
    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
    px: 1.75,
    py: 1.25,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
};

export default styles;
