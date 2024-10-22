import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { STORAGE_KEYS } from '@/shared/const/storageKeys';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const userAuthData = localStorage.getItem(STORAGE_KEYS.AUTH);
      state.authData = userAuthData ? JSON.parse(userAuthData) : undefined;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(STORAGE_KEYS.AUTH);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
