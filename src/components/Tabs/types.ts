import type { ITabPanelProps } from './components/TabPanel/types';
import type { BoxProps, TabProps, TabsProps } from '@mui/material';

export interface ITabsProps extends Omit<BoxProps, 'children'> {
  tabsProps: TabProps[];
  tabPanelsProps: Omit<ITabPanelProps, 'id' | 'index' | 'value'>[];
  tabsContainerProps?: Omit<TabsProps, 'children'>;
}
