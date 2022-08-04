import { Box, Typography } from '@mui/material';

import mergeSx from '@/utils/merge-sx';

import LeftActions from './components/LeftActions';
import RightActions from './components/RightActions';
import styles from './styles';
import useHeader from './useHeader';

const Header = () => {
  const { pageTitle, canGoBack, hasShadow } = useHeader();

  return (
    <Box component="header" sx={mergeSx(styles.container, hasShadow ? styles.bottomShadow : null)}>
      <LeftActions canGoBack={canGoBack} />
      <Typography variant="body2" fontWeight={600}>
        {pageTitle}
      </Typography>
      <RightActions showMenuDropDown={canGoBack} />
    </Box>
  );
};

export default Header;
