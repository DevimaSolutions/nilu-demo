import { Box, Tab, Tabs as MuiTabs } from '@mui/material';
import { useId, useState } from 'react';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

import fadeQuick from '@/config/transitions/fade-quick';
import mergeSx from '@/utils/merge-sx';

import TabPanel from './components/TabPanel';
import styles from './styles';

import type { ITabsProps } from './types';

function a11yProps(id: string, index: string | number) {
  return {
    id: `tab-${id}-${index}`,
    'aria-controls': `tabpanel-${id}-${index}`,
  };
}

const Tabs = ({ tabsProps, tabPanelsProps, tabsContainerProps, sx, ...props }: ITabsProps) => {
  const id = useId();
  const [value, setValue] = useState(0);

  const onChange = (_: unknown, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={mergeSx(styles.tabs, sx)} {...props}>
        <MuiTabs
          value={value}
          onChange={onChange}
          {...tabsContainerProps}
          sx={mergeSx(styles.tabsContainer, tabsContainerProps?.sx)}
        >
          {tabsProps.map((tabProps, idx) => (
            <Tab key={idx} {...a11yProps(id, idx)} {...tabProps} />
          ))}
        </MuiTabs>
      </Box>
      <Box sx={fadeQuick} width="100%">
        <SwitchTransition>
          <CSSTransition
            key={value}
            addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
            classNames="fade-quick"
            timeout={100}
          >
            <>
              {tabPanelsProps.map((tabPanelProps, idx) => (
                <TabPanel key={idx} id={id} value={value} index={idx} {...tabPanelProps} />
              ))}
            </>
          </CSSTransition>
        </SwitchTransition>
      </Box>
    </>
  );
};

export default Tabs;
