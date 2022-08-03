import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../store';

export const shopStateSelector = (state: RootState) => state.shop;

export const shopProductsSelector = createSelector(shopStateSelector, (shop) => shop.products);
export const shopCreatorSelector = createSelector(shopStateSelector, (shop) => shop.creator);
