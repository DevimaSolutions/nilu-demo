import { SvgIcon } from '@mui/material';

import type { SvgIconProps } from '@mui/material';

const PrivateMessageIcon = ({
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  fill = 'none',
  ...props
}: SvgIconProps) => {
  return (
    <SvgIcon width={width} height={height} viewBox={viewBox} fill={fill} {...props}>
      <path
        d="M10.8751 12C10.8751 12.2984 10.9937 12.5845 11.2046 12.7955C11.4156 13.0065 11.7018 13.125 12.0001 13.125C12.2985 13.125 12.5846 13.0065 12.7956 12.7955C13.0066 12.5845 13.1251 12.2984 13.1251 12C13.1251 11.7016 13.0066 11.4155 12.7956 11.2045C12.5846 10.9935 12.2985 10.875 12.0001 10.875C11.7018 10.875 11.4156 10.9935 11.2046 11.2045C10.9937 11.4155 10.8751 11.7016 10.8751 12V12ZM15.5626 12C15.5626 12.2984 15.6812 12.5845 15.8921 12.7955C16.1031 13.0065 16.3893 13.125 16.6876 13.125C16.986 13.125 17.2721 13.0065 17.4831 12.7955C17.6941 12.5845 17.8126 12.2984 17.8126 12C17.8126 11.7016 17.6941 11.4155 17.4831 11.2045C17.2721 10.9935 16.986 10.875 16.6876 10.875C16.3893 10.875 16.1031 10.9935 15.8921 11.2045C15.6812 11.4155 15.5626 11.7016 15.5626 12ZM6.18763 12C6.18763 12.2984 6.30616 12.5845 6.51714 12.7955C6.72812 13.0065 7.01426 13.125 7.31263 13.125C7.611 13.125 7.89715 13.0065 8.10813 12.7955C8.31911 12.5845 8.43763 12.2984 8.43763 12C8.43763 11.7016 8.31911 11.4155 8.10813 11.2045C7.89715 10.9935 7.611 10.875 7.31263 10.875C7.01426 10.875 6.72812 10.9935 6.51714 11.2045C6.30616 11.4155 6.18763 11.7016 6.18763 12V12ZM21.6845 7.93125C21.1548 6.67266 20.3954 5.54297 19.4275 4.57266C18.4663 3.60796 17.3252 2.84114 16.0689 2.31563C14.7798 1.77422 13.4111 1.5 12.0001 1.5H11.9533C10.5329 1.50703 9.15716 1.78828 7.86341 2.34141C6.61785 2.87232 5.48747 3.64049 4.53529 4.60312C3.5767 5.57109 2.82435 6.69609 2.30404 7.95C1.76498 9.24844 1.4931 10.6289 1.50013 12.0492C1.50809 13.6769 1.89316 15.2806 2.62513 16.7344V20.2969C2.62513 20.5828 2.73872 20.857 2.94091 21.0592C3.1431 21.2614 3.41732 21.375 3.70326 21.375H7.2681C8.72192 22.107 10.3256 22.492 11.9533 22.5H12.0025C13.4064 22.5 14.7681 22.2281 16.0501 21.6961C17.3001 21.1768 18.4369 20.419 19.397 19.4648C20.365 18.5062 21.1267 17.3859 21.6587 16.1367C22.2119 14.843 22.4931 13.4672 22.5001 12.0469C22.5072 10.6195 22.2306 9.23437 21.6845 7.93125V7.93125ZM18.1431 18.1969C16.5001 19.8234 14.3204 20.7188 12.0001 20.7188H11.9603C10.547 20.7117 9.1431 20.3602 7.90326 19.6992L7.70638 19.5938H4.40638V16.2938L4.30091 16.0969C3.63998 14.857 3.28841 13.4531 3.28138 12.0398C3.27201 9.70313 4.16498 7.50937 5.80326 5.85703C7.4392 4.20469 9.62591 3.29063 11.9626 3.28125H12.0025C13.1744 3.28125 14.3111 3.50859 15.3822 3.95859C16.4275 4.39687 17.365 5.02734 18.1712 5.83359C18.9751 6.6375 19.6079 7.57734 20.0462 8.62266C20.5009 9.70547 20.7283 10.8539 20.7236 12.0398C20.7095 14.3742 19.7931 16.5609 18.1431 18.1969V18.1969Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default PrivateMessageIcon;
