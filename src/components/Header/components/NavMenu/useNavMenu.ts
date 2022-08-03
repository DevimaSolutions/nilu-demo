import { useState } from 'react';

import type { MouseEvent } from 'react';

const useNavMenu = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const onOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };
  return {
    isOpen: Boolean(anchorEl),
    anchorEl,
    onOpen,
    onClose,
  };
};

export default useNavMenu;
