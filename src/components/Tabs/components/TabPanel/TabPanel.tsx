import type { ITabPanelProps } from './types';

const TabPanel = ({ children, value, index, id, ...rest }: ITabPanelProps) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel=${id}-${index}`}
      aria-labelledby={`tab-${id}-${index}`}
      {...rest}
    >
      {value === index && children}
    </div>
  );
};

export default TabPanel;
