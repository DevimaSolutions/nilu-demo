import { SvgIcon } from '@mui/material';

import type { SvgIconProps } from '@mui/material';

const ArrowLeftIcon = ({
  width = 20,
  height = 20,
  viewBox = '0 0 20 20',
  fill = 'none',
  ...props
}: SvgIconProps) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} fill={fill} {...props}>
      <path
        d="M14.1254 7.40625H4.98322L10.4551 2.65625C10.5426 2.57969 10.4895 2.4375 10.3738 2.4375H8.99104C8.9301 2.4375 8.87229 2.45937 8.82697 2.49844L2.92229 7.62187C2.86821 7.66875 2.82483 7.72671 2.79511 7.79181C2.76538 7.85692 2.75 7.92765 2.75 7.99922C2.75 8.07079 2.76538 8.14152 2.79511 8.20663C2.82483 8.27173 2.86821 8.32968 2.92229 8.37656L8.86135 13.5312C8.88479 13.5516 8.91291 13.5625 8.9426 13.5625H10.3723C10.4879 13.5625 10.541 13.4187 10.4535 13.3438L4.98322 8.59375H14.1254C14.1942 8.59375 14.2504 8.5375 14.2504 8.46875V7.53125C14.2504 7.4625 14.1942 7.40625 14.1254 7.40625Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default ArrowLeftIcon;
