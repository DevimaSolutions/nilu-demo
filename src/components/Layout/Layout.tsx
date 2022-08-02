import { Box } from '@mui/material';

import styles from './styles';
import useLayout from './useLayout';

import type { ILayoutProps } from './types';

const Layout = ({ children }: ILayoutProps) => {
  useLayout();

  return (
    <Box sx={styles.container}>
      <header>HEADER</header>
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
