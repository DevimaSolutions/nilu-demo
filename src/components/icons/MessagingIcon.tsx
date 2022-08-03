import { SvgIcon } from '@mui/material';

import type { SvgIconProps } from '@mui/material';

const MessagingIcon = ({
  width = 26,
  height = 26,
  viewBox = '0 0 26 26',
  fill = 'none',
  ...props
}: SvgIconProps) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} fill={fill} {...props}>
      <path
        d="M23.9707 8.59221C23.4011 7.23261 22.5723 5.99682 21.5307 4.95373C20.4922 3.90883 19.2585 3.07807 17.8998 2.50862C16.508 1.92243 15.0125 1.62195 13.5022 1.62502H13.4514C11.9153 1.63264 10.4299 1.93733 9.03089 2.53655C7.68384 3.11183 6.46179 3.94407 5.43304 4.98674C4.40149 6.02749 3.58224 7.25895 3.02093 8.61252C2.43825 10.0201 2.14301 11.53 2.15257 13.0533C2.16019 14.8155 2.58167 16.5649 3.36878 18.1289V21.9883C3.36878 22.6332 3.89183 23.1563 4.53421 23.1563H8.38851C9.95987 23.9492 11.6939 24.3664 13.4539 24.375H13.5073C15.0256 24.375 16.4957 24.0805 17.8821 23.5041C19.2339 22.9415 20.4629 22.1204 21.5002 21.0869C22.5463 20.0485 23.369 18.8348 23.9453 17.4815C24.542 16.0799 24.8467 14.5895 24.8543 13.0508C24.8594 11.5045 24.5598 10.0039 23.9707 8.59221ZM8.43421 14.2188C7.7639 14.2188 7.218 13.6729 7.218 13C7.218 12.3272 7.7639 11.7813 8.43421 11.7813C9.10452 11.7813 9.65042 12.3272 9.65042 13C9.65042 13.6729 9.10706 14.2188 8.43421 14.2188ZM13.5022 14.2188C12.8319 14.2188 12.286 13.6729 12.286 13C12.286 12.3272 12.8319 11.7813 13.5022 11.7813C14.1725 11.7813 14.7184 12.3272 14.7184 13C14.7184 13.6729 14.1725 14.2188 13.5022 14.2188ZM18.5701 14.2188C17.8998 14.2188 17.3539 13.6729 17.3539 13C17.3539 12.3272 17.8998 11.7813 18.5701 11.7813C19.2405 11.7813 19.7864 12.3272 19.7864 13C19.7864 13.6729 19.2405 14.2188 18.5701 14.2188Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default MessagingIcon;