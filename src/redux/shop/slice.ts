import { createSlice } from '@reduxjs/toolkit';

import { ShopOption } from './types';

import type { IShopState } from './types';

const initialState: IShopState = {
  creator: null,
  products: {
    [ShopOption.PrivateMessage]: null,
    [ShopOption.OneToOneSession]: null,
    [ShopOption.PremiumContent]: null,
  },
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    resetState: (state) => {
      state.creator = null;
      state.products = initialState.products;
    },
  },
});

export const { resetState } = shopSlice.actions;

export const shopReducer = shopSlice.reducer;
