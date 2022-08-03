import { createSlice } from '@reduxjs/toolkit';

import type { IAuthState } from './types';

const initialState: IAuthState = {
  user: { fullName: 'John Irvie', username: 'john', image: null },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState: (state) => {
      state.user = initialState.user;
    },
  },
});

export const { resetState } = authSlice.actions;

export const authReducer = authSlice.reducer;
