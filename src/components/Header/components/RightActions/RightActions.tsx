import { Avatar, Box, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import NotificationIcon from '@/components/icons/NotificationIcon';
import { userSelector } from '@/redux/auth';
import { getUserInitials } from '@/utils/get-user-initials';

import NavMenu from '../NavMenu';

import styles from './styles';

import type { IRightActionsProps } from './types';

const RightActions = ({ showMenuDropDown }: IRightActionsProps) => {
  const user = useSelector(userSelector);
  return (
    <Box sx={styles.container}>
      <SwitchTransition>
        <CSSTransition
          key={showMenuDropDown ? 'showMenuDropDown' : 'dontShowMenuDropDown'}
          addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
          classNames="fade-quick"
        >
          {showMenuDropDown ? (
            <NavMenu />
          ) : (
            <>
              <IconButton sx={styles.notificationIcon}>
                <NotificationIcon />
              </IconButton>
              <IconButton sx={styles.avatarButton}>
                <Avatar sx={styles.avatarIcon} alt={user.fullName} src={user.image ?? undefined}>
                  {getUserInitials(user.fullName)}
                </Avatar>
              </IconButton>
            </>
          )}
        </CSSTransition>
      </SwitchTransition>
    </Box>
  );
};

export default RightActions;
