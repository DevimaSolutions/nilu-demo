import { SvgIcon } from '@mui/material';

import type { SvgIconProps } from '@mui/material';

const ArrowRightIcon = ({
  width = 20,
  height = 20,
  viewBox = '0 0 20 20',
  fill = 'none',
  ...props
}: SvgIconProps) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} fill={fill} {...props}>
      <path
        d="M16.9727 9.52734L9.59375 3.12305C9.53711 3.07422 9.46484 3.04688 9.38867 3.04688H7.66016C7.51563 3.04688 7.44922 3.22656 7.55859 3.32031L14.3984 9.25781H2.96875C2.88281 9.25781 2.8125 9.32812 2.8125 9.41406V10.5859C2.8125 10.6719 2.88281 10.7422 2.96875 10.7422H14.3965L7.55664 16.6797C7.44727 16.7754 7.51367 16.9531 7.6582 16.9531H9.44531C9.48242 16.9531 9.51953 16.9395 9.54688 16.9141L16.9727 10.4727C17.0403 10.4139 17.0945 10.3412 17.1316 10.2597C17.1688 10.1782 17.188 10.0896 17.188 10C17.188 9.9104 17.1688 9.82184 17.1316 9.7403C17.0945 9.65876 17.0403 9.58614 16.9727 9.52734V9.52734Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default ArrowRightIcon;
