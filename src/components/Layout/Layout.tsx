import { Box } from '@mui/material';

import Header from '@/components/Header';

import styles from './styles';
import useLayout from './useLayout';

import type { ILayoutProps } from './types';

const Layout = ({ children }: ILayoutProps) => {
  useLayout();

  return (
    <Box sx={styles.container}>
      <Header />
      <main>{children}</main>
    </Box>
  );
};

export default Layout;
