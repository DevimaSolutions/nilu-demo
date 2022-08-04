import { createSlice } from '@reduxjs/toolkit';

import { getShopInfo, simulateCreatorResponse } from './thunks';
import { ShopOption } from './types';

import type { IShopState, IShopProductOptions } from './types';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: IShopState = {
  creator: null,
  description: null,
  products: {
    [ShopOption.PrivateMessage]: null,
    [ShopOption.OneToOneSession]: null,
    [ShopOption.PremiumContent]: null,
  },
  selectedProductOption: null,
  privateMessageResponse: null,
};

const shopSlice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    resetState: (state) => {
      state.creator = null;
      state.description = null;
      state.products = initialState.products;
      state.selectedProductOption = null;
      state.privateMessageResponse = null;
    },
    selectProductOption: (state, { payload }: PayloadAction<string>) => {
      state.selectedProductOption = Object.values(
        state.products,
      ).reduce<IShopProductOptions | null>((res, product) => {
        const targetOption = product?.options.find((option) => option.id === payload);
        return targetOption ? { ...targetOption } : res;
      }, null);
    },
    clearPrivateMessageResponse: (state) => {
      state.privateMessageResponse = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getShopInfo.fulfilled, (state, { payload }) => {
      if (!payload) {
        // data is already pulled
        return;
      }

      state.creator = payload.creator;
      state.description = payload.description;
      state.products = payload.products;
    });
    builder.addCase(simulateCreatorResponse.fulfilled, (state, { payload }) => {
      state.privateMessageResponse = { src: payload, time: new Date() };
    });
  },
});

export const { resetState, selectProductOption, clearPrivateMessageResponse } = shopSlice.actions;

export const shopReducer = shopSlice.reducer;
