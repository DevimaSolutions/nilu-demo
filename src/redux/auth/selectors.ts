import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from '../store';

const authSelector = (state: RootState) => state.auth;

export const userSelector = createSelector(authSelector, (auth) => auth.user);
