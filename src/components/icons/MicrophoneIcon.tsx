import { SvgIcon } from '@mui/material';

import type { SvgIconProps } from '@mui/material';

const MicrophoneIcon = ({
  width = 26,
  height = 26,
  viewBox = '0 0 26 26',
  fill = 'none',
  ...props
}: SvgIconProps) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} fill={fill} {...props}>
      <path
        d="M13.5 15.8438C15.8842 15.8438 17.8164 13.9344 17.8164 11.5781V5.89062C17.8164 3.53437 15.8842 1.625 13.5 1.625C11.1158 1.625 9.18359 3.53437 9.18359 5.89062V11.5781C9.18359 13.9344 11.1158 15.8438 13.5 15.8438ZM21.8789 11.5273C21.8789 11.4156 21.7875 11.3242 21.6758 11.3242H20.1523C20.0406 11.3242 19.9492 11.4156 19.9492 11.5273C19.9492 15.0896 17.0623 17.9766 13.5 17.9766C9.9377 17.9766 7.05078 15.0896 7.05078 11.5273C7.05078 11.4156 6.95938 11.3242 6.84766 11.3242H5.32422C5.2125 11.3242 5.12109 11.4156 5.12109 11.5273C5.12109 15.8107 8.33555 19.3451 12.4844 19.8453V22.4453H8.79512C8.44727 22.4453 8.16797 22.8084 8.16797 23.2578V24.1719C8.16797 24.2836 8.23906 24.375 8.32539 24.375H18.6746C18.7609 24.375 18.832 24.2836 18.832 24.1719V23.2578C18.832 22.8084 18.5527 22.4453 18.2049 22.4453H14.4141V19.858C18.6111 19.401 21.8789 15.8463 21.8789 11.5273Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default MicrophoneIcon;
