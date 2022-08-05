import { createSlice } from '@reduxjs/toolkit';

import type { IAuthState } from './types';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: IAuthState = {
  user: { fullName: 'John Irvie', username: 'john', image: null },
  setNavigationDirection: 'forward',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetState: (state) => {
      state.user = initialState.user;
      state.setNavigationDirection = 'forward';
    },
    setNavigationDirection: (state, { payload }: PayloadAction<'forward' | 'backward'>) => {
      state.setNavigationDirection = payload;
    },
  },
});

export const { resetState, setNavigationDirection } = authSlice.actions;

export const authReducer = authSlice.reducer;
