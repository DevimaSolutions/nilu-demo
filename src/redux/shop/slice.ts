import { createSlice } from '@reduxjs/toolkit';

import { getShopInfo } from './thunks';
import { ShopOption } from './types';

import type { IShopState } from './types';

const initialState: IShopState = {
  creator: null,
  description: null,
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
      state.description = null;
      state.products = initialState.products;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getShopInfo.fulfilled, (state, { payload }) => {
      state.creator = payload.creator;
      state.description = payload.description;
      state.products = payload.products;
    });
  },
});

export const { resetState } = shopSlice.actions;

export const shopReducer = shopSlice.reducer;
