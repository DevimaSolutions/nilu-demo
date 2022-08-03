import { SvgIcon } from '@mui/material';

import type { SvgIconProps } from '@mui/material';

const CheckmarkIcon = ({
  width = 28,
  height = 28,
  viewBox = '0 0 28 28',
  fill = 'none',
  ...props
}: SvgIconProps) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} fill={fill} {...props}>
      <path
        d="M25.4379 5.19531H23.5266C23.2586 5.19531 23.0043 5.31836 22.8403 5.52891L11.5665 19.8105L6.1606 12.9609C6.07882 12.8571 5.97459 12.7732 5.85572 12.7154C5.73685 12.6576 5.60644 12.6275 5.47427 12.6273H3.56294C3.37974 12.6273 3.27857 12.8379 3.39068 12.9801L10.8801 22.4684C11.2301 22.9113 11.9028 22.9113 12.2555 22.4684L25.6102 5.54531C25.7223 5.40586 25.6211 5.19531 25.4379 5.19531V5.19531Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default CheckmarkIcon;
