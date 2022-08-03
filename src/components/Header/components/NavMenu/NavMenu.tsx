import { IconButton, Menu, MenuItem } from '@mui/material';

import MoreIcon from '@/components/icons/MoreIcon';

import styles from './styles';
import useNavMenu from './useNavMenu';

const NavMenu = () => {
  const { isOpen, anchorEl, onOpen, onClose } = useNavMenu();
  return (
    <>
      <IconButton onClick={onOpen} sx={styles.menuIcon}>
        <MoreIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={isOpen} onClose={onClose}>
        <MenuItem onClick={onClose}>Notifications</MenuItem>
        <MenuItem onClick={onClose}>My account</MenuItem>
      </Menu>
    </>
  );
};
export default NavMenu;
