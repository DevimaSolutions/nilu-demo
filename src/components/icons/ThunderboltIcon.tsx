import { SvgIcon } from '@mui/material';

import type { SvgIconProps } from '@mui/material';

const ThunderboltIcon = ({
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  fill = 'none',
  ...props
}: SvgIconProps) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} fill={fill} {...props}>
      <path
        d="M19.8754 8.42109H14.7122L19.3551 2.55469C19.4512 2.43047 19.3645 2.25 19.2075 2.25H10.2192C10.1536 2.25 10.0903 2.28516 10.0575 2.34375L3.98482 12.832C3.91216 12.9563 4.00122 13.1133 4.14654 13.1133H8.23404L6.13872 21.4945C6.09419 21.6773 6.3145 21.8062 6.45044 21.675L20.0043 8.74219C20.1262 8.62734 20.0442 8.42109 19.8754 8.42109ZM8.8645 17.168L10.2778 11.5195H6.58872L11.0325 3.84609H16.2965L11.4145 10.0172H16.3598L8.8645 17.168Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default ThunderboltIcon;
