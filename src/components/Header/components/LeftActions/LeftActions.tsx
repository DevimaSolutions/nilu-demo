import { Box, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import OutlinedArrowLeftIcon from '@/components/icons/OulinedArrowLeftIcon';
import Logo from '@/components/Logo';

import styles from './styles';

import type { ILeftActionProps } from './types';

const LeftActions = ({ canGoBack = false }: ILeftActionProps) => {
  const navigate = useNavigate();
  return (
    <Box sx={styles.container}>
      {canGoBack ? (
        <IconButton onClick={() => navigate(-1)} sx={styles.link}>
          <OutlinedArrowLeftIcon />
        </IconButton>
      ) : (
        <Box component={Link} to="/" sx={styles.link}>
          <Logo />
        </Box>
      )}
    </Box>
  );
};

export default LeftActions;
