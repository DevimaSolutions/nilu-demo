import { SvgIcon } from '@mui/material';

import type { SvgIconProps } from '@mui/material';

const OutlinedArrowLeftIcon = ({
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  fill = 'none',
  ...props
}: SvgIconProps) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} fill={fill} {...props}>
      <path
        d="M16.9688 5.11679V3.30507C16.9688 3.14804 16.7883 3.06132 16.6664 3.15741L6.10081 11.4098C6.01105 11.4796 5.93841 11.569 5.88844 11.6711C5.83847 11.7733 5.8125 11.8855 5.8125 11.9992C5.8125 12.1129 5.83847 12.2251 5.88844 12.3273C5.93841 12.4295 6.01105 12.5188 6.10081 12.5887L16.6664 20.841C16.7907 20.9371 16.9688 20.8504 16.9688 20.6933V18.8816C16.9688 18.7668 16.9149 18.6566 16.8258 18.5863L8.38832 12.0004L16.8258 5.4121C16.9149 5.34179 16.9688 5.23163 16.9688 5.11679Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default OutlinedArrowLeftIcon;
