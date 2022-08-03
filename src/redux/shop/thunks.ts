import { createAsyncThunk } from '@reduxjs/toolkit';

import shopService from '@/services/shop-service';

export const getShopInfo = createAsyncThunk('shop/getInfo', shopService.getInfo);
