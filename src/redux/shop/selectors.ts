import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../store';

export const shopStateSelector = (state: RootState) => state.shop;

export const shopProductsSelector = createSelector(shopStateSelector, (shop) => shop.products);
export const shopCreatorSelector = createSelector(shopStateSelector, (shop) => shop.creator);
export const shopSelectedOptionSelector = createSelector(
  shopStateSelector,
  (shop) => shop.selectedProductOption,
);

export const privateMessageResponseSelector = createSelector(
  shopStateSelector,
  (shop) => shop.privateMessageResponse,
);

export const hasPrivateMessageResponseSelector = createSelector(
  privateMessageResponseSelector,
  (res) => res !== null,
);
