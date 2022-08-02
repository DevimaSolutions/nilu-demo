import { createAsyncThunk } from '@reduxjs/toolkit';

import shopService from '@/services/shop-service';

export const cancelSaleArtwork = createAsyncThunk('shop/getInfo', shopService.getInfo);
