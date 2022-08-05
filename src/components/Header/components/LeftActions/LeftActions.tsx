import { Box, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import OutlinedArrowLeftIcon from '@/components/icons/OulinedArrowLeftIcon';
import Logo from '@/components/Logo';
import { setNavigationDirection } from '@/redux/auth';

import styles from './styles';

import type { ILeftActionProps } from './types';

const LeftActions = ({ canGoBack = false }: ILeftActionProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onNavigateBack = () => {
    dispatch(setNavigationDirection('backward'));
    navigate(-1);
  };
  return (
    <Box sx={styles.container}>
      <SwitchTransition>
        <CSSTransition
          key={canGoBack ? 'canGoBack' : 'canNotGoBack'}
          addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
          classNames="fade-quick"
        >
          {canGoBack ? (
            <IconButton onClick={onNavigateBack} sx={styles.link}>
              <OutlinedArrowLeftIcon />
            </IconButton>
          ) : (
            <Box sx={styles.link}>
              <Logo />
            </Box>
          )}
        </CSSTransition>
      </SwitchTransition>
    </Box>
  );
};

export default LeftActions;
