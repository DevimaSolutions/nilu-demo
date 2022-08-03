import { Box, Typography } from '@mui/material';

import styles from './styles';

const Logo = () => {
  return (
    <Typography variant="body1" sx={styles.logo} fontWeight={700}>
      <Box component="span" sx={styles.icon} />
      nilu
    </Typography>
  );
};

export default Logo;
