import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Header from '@/components/Header';
import { navigationDirectionSelector, setNavigationDirection } from '@/redux/auth';

import styles from './styles';

import type { ILayoutProps } from './types';

const disabledRouteTransitionPaths = ['/'];

const Layout = ({ children }: ILayoutProps) => {
  const dispatch = useDispatch();
  const navigationDirection = useSelector(navigationDirectionSelector);
  const location = useLocation();

  const setDefaultNavigationDirection = () => {
    dispatch(setNavigationDirection('forward'));
  };

  const isTransitionDisabled = disabledRouteTransitionPaths.includes(location.pathname);

  return (
    <Box sx={styles.container}>
      <Header />
      {isTransitionDisabled ? (
        <main>{children}</main>
      ) : (
        <TransitionGroup component="main">
          <CSSTransition
            key={location.key}
            addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
            onExited={setDefaultNavigationDirection}
            classNames={`slide-${navigationDirection}`}
            timeout={300}
          >
            {children}
          </CSSTransition>
        </TransitionGroup>
      )}
    </Box>
  );
};

export default Layout;
