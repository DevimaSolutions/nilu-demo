import { Box } from '@mui/material';

import type { ITabPanelProps } from './types';

const TabPanel = ({ children, value, index, id, ...rest }: ITabPanelProps) => {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel=${id}-${index}`}
      aria-labelledby={`tab-${id}-${index}`}
      {...rest}
    >
      {value === index && children}
    </Box>
  );
};

export default TabPanel;
