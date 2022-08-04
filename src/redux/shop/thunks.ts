import { createAsyncThunk } from '@reduxjs/toolkit';

import shopService from '@/services/shop-service';
import getCatImageUrl from '@/utils/get-cat-image-url';

import type { RootState } from '../store';

export const getShopInfo = createAsyncThunk('shop/getInfo', (username: string, thunkApi) => {
  const state = thunkApi.getState() as RootState;

  if (state.shop.creator?.username === username) {
    return null;
  }
  return shopService.getInfo(username);
});

export const simulateCreatorResponse = createAsyncThunk(
  'shop/simulateCreatorResponse',
  // Simulate creator response in 5 seconds
  () => new Promise<string>((res) => getCatImageUrl().then((url) => setTimeout(res, 5000, url))),
);
