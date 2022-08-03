import { Box, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { shopCreatorSelector } from '@/redux/shop';

import { cardInfo } from './constants';
import styles from './styles';

import type { IShopProductCardProps } from './types';
import type { MouseEvent } from 'react';

const ShopProductCard = ({ type, price }: IShopProductCardProps) => {
  const creator = useSelector(shopCreatorSelector);
  const navigate = useNavigate();
  const {
    color,
    icon: IconComponent,
    caption,
    pricePostfix,
    buttonText,
    createLink,
  } = cardInfo[type];

  const onNavigate = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const url = createLink(creator?.username);
    if (url) {
      navigate(url);
    }
  };

  return (
    <Box sx={styles.card}>
      <IconComponent color={color} />
      <Typography variant="body2" fontWeight={600} mt={1.75} mb={0.5}>
        {caption}
      </Typography>
      <Typography mb={1.75}>
        <strong>{price}$</strong>
        {pricePostfix}
      </Typography>
      <Button
        color={color}
        component="a"
        variant="contained"
        onClick={onNavigate}
        href={createLink(creator?.username) ?? '#'}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default ShopProductCard;
