import { SvgIcon } from '@mui/material';

import type { SvgIconProps } from '@mui/material';

const DislikeIcon = ({
  width = 28,
  height = 28,
  viewBox = '0 0 28 28',
  fill = 'none',
  ...props
}: SvgIconProps) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} fill={fill} {...props}>
      <path
        d="M17.3027 10.4258C17.6309 9.9922 17.8125 9.46095 17.8125 8.90822C17.8125 8.03126 17.3223 7.20119 16.5332 6.7383C16.3301 6.61915 16.0988 6.55644 15.8633 6.55666H11.1797L11.2969 4.15626C11.3242 3.57619 11.1191 3.02541 10.7207 2.60548C10.5252 2.39851 10.2893 2.23383 10.0276 2.12163C9.76588 2.00942 9.48395 1.95208 9.19922 1.95314C8.18359 1.95314 7.28516 2.63673 7.01563 3.61525L5.33789 9.68947H2.8125C2.4668 9.68947 2.1875 9.96877 2.1875 10.3145V17.4238C2.1875 17.7695 2.4668 18.0488 2.8125 18.0488H14.5566C14.7363 18.0488 14.9121 18.0137 15.0742 17.9434C16.0039 17.5469 16.6035 16.6387 16.6035 15.6309C16.6035 15.3848 16.5684 15.1426 16.498 14.9082C16.8262 14.4746 17.0078 13.9434 17.0078 13.3906C17.0078 13.1445 16.9727 12.9024 16.9023 12.668C17.2305 12.2344 17.4121 11.7031 17.4121 11.1504C17.4082 10.9043 17.373 10.6602 17.3027 10.4258V10.4258ZM3.59375 16.6426V11.0957H5.17578V16.6426H3.59375ZM16.0234 9.74806L15.5957 10.1192L15.8672 10.6153C15.9566 10.7787 16.003 10.9622 16.002 11.1485C16.002 11.4707 15.8613 11.7774 15.6191 11.9883L15.1914 12.3594L15.4629 12.8555C15.5523 13.0189 15.5987 13.2024 15.5977 13.3887C15.5977 13.711 15.457 14.0176 15.2148 14.2285L14.7871 14.5996L15.0586 15.0957C15.148 15.2591 15.1944 15.4426 15.1934 15.6289C15.1934 16.0664 14.9355 16.461 14.5371 16.6406H6.42578V11.0332L8.36914 3.9922C8.41925 3.81173 8.52682 3.65252 8.67555 3.53868C8.82428 3.42484 9.00607 3.36258 9.19336 3.36134C9.3418 3.36134 9.48828 3.40431 9.60547 3.4922C9.79883 3.63673 9.90234 3.85548 9.89062 4.08791L9.70312 7.96291H15.8438C16.1914 8.1758 16.4062 8.53517 16.4062 8.90822C16.4062 9.23048 16.2656 9.53517 16.0234 9.74806Z"
        fill="currentColor"
      />
      <path
        d="M4.27617 13.4039C4.17773 13.0758 4.12852 12.7367 4.12852 12.3922C4.12852 11.6184 4.38281 10.8746 4.84219 10.2676C4.74375 9.93948 4.69453 9.60041 4.69453 9.25588C4.69453 8.48205 4.94883 7.7383 5.4082 7.13127C5.30976 6.80315 5.26055 6.46409 5.26055 6.11955C5.26055 4.70862 6.1 3.43713 7.40156 2.88205C7.63034 2.78342 7.87704 2.73315 8.12617 2.7344H24.5625C25.0465 2.7344 25.4375 3.12541 25.4375 3.6094V13.5625C25.4375 14.0465 25.0465 14.4375 24.5625 14.4375H21.027L18.6809 22.936C18.3035 24.3059 17.0457 25.2629 15.6238 25.2629C14.8117 25.2629 14.0543 24.9403 13.4938 24.3496C12.9332 23.7617 12.6461 22.9906 12.6871 22.1785L12.8512 18.818H6.29141C5.96055 18.818 5.63789 18.7305 5.35352 18.5637C4.24883 17.9211 3.5625 16.7563 3.5625 15.5285C3.5625 14.7547 3.8168 14.011 4.27617 13.4039ZM23.4688 12.466V4.70041H21.2539V12.466H23.4688ZM6.31875 16.852H14.9156L14.6531 22.277C14.6367 22.6024 14.7816 22.9086 15.0523 23.111C15.2191 23.234 15.4242 23.2969 15.6293 23.2942C15.8913 23.2916 16.1454 23.2042 16.3535 23.0449C16.5615 22.8857 16.7123 22.6632 16.7832 22.411L19.5039 12.5535V4.70041H8.14531C7.872 4.8229 7.63988 5.02174 7.47689 5.27302C7.3139 5.5243 7.22697 5.81731 7.22656 6.11682C7.22656 6.38205 7.28945 6.63362 7.41524 6.8633L7.79531 7.55784L7.19649 8.07737C7.02794 8.22335 6.89282 8.40393 6.80033 8.60683C6.70785 8.80973 6.66017 9.03017 6.66055 9.25315C6.66055 9.51838 6.72344 9.76994 6.84922 9.99963L7.2293 10.6942L6.63047 11.2137C6.46192 11.3597 6.3268 11.5403 6.23432 11.7432C6.14184 11.9461 6.09416 12.1665 6.09453 12.3895C6.09453 12.6547 6.15742 12.9063 6.2832 13.136L6.66602 13.8332L6.06719 14.3528C5.89864 14.4987 5.76352 14.6793 5.67104 14.8822C5.57855 15.0851 5.53088 15.3056 5.53125 15.5285C5.53125 16.0508 5.83203 16.5539 6.31875 16.852Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default DislikeIcon;
