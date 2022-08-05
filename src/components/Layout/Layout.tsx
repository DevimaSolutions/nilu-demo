import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from '@/components/Header';
import { navigationDirectionSelector, setNavigationDirection } from '@/redux/auth';

import styles from './styles';
import useLayout from './useLayout';

import type { ILayoutProps } from './types';

const Layout = ({ children }: ILayoutProps) => {
  const dispatch = useDispatch();
  const navigationDirection = useSelector(navigationDirectionSelector);
  const locationKey = useLayout();

  const setDefaultNavigationDirection = () => {
    dispatch(setNavigationDirection('forward'));
  };

  console.log(locationKey, navigationDirection);

  return (
    <Box sx={styles.container}>
      <Header />
      <TransitionGroup component="main">
        <CSSTransition
          key={locationKey}
          addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
          onExited={setDefaultNavigationDirection}
          classNames={`slide-${navigationDirection}`}
          timeout={300}
        >
          {children}
        </CSSTransition>
      </TransitionGroup>
    </Box>
  );
};

export default Layout;
