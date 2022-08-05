import { Avatar, Grid, Stack, Typography } from '@mui/material';
import { useMemo } from 'react';

import LikeIcon from '@/components/icons/LikeIcon';
import PlayIcon from '@/components/icons/PlayIcon';
import ShopProductsIcon from '@/components/icons/ShopProductsIcon';
import SeeMoreText from '@/components/SeeMoreText';
import ShopProductCard from '@/components/ShopProductCard';
import Tabs from '@/components/Tabs';
import { getUserInitials } from '@/utils/get-user-initials';

import styles from './styles';
import useShopPage from './useShopPage';

import type { ShopOption } from '@/redux/shop';

const ShopPage = () => {
  const { creator, products, description } = useShopPage();

  const tabsProps = useMemo(() => [{ label: <ShopProductsIcon /> }, { label: <PlayIcon /> }], []);

  const tabPanelsProps = useMemo(
    () => [
      {
        sx: styles.tabPanels,
        children: (
          <Grid container sx={styles.productGrid} spacing={1.75}>
            {Object.entries(products).map(([key, info]) =>
              info ? (
                <Grid item xs={6} key={key}>
                  <ShopProductCard type={key as unknown as ShopOption} {...info} />
                </Grid>
              ) : null,
            )}
          </Grid>
        ),
      },
      {
        children: (
          <Stack alignItems="center" py={10}>
            <Typography variant="subtitle1" fontWeight={600}>
              This feature will be added soon.
            </Typography>
          </Stack>
        ),
      },
    ],
    [products],
  );

  return (
    <Stack alignItems="center">
      <Avatar alt={creator?.fullName} src={creator?.image ?? undefined} sx={styles.avatar}>
        {creator?.fullName ? getUserInitials(creator.fullName) : undefined}
      </Avatar>
      <Typography variant="subtitle1" fontWeight={600} mt={1.25} mb={1.75}>
        {creator ? (
          <>
            {creator.username} <LikeIcon sx={styles.likeIcon} /> {creator.rating}%
          </>
        ) : (
          <> &nbsp;</>
        )}
      </Typography>
      <Typography component="div" textAlign="center">
        {description ? (
          <SeeMoreText text={description} />
        ) : (
          <>
            &nbsp;
            <br />
            &nbsp;
          </>
        )}
      </Typography>
      <Tabs sx={styles.tabs} tabsProps={tabsProps} tabPanelsProps={tabPanelsProps} />
    </Stack>
  );
};

export default ShopPage;
