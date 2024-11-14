import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser, IUserSchema } from '../types/user';
import { STORAGE_KEYS } from '@/shared/const/storageKeys';

const initialState: IUserSchema = {_inited: false,};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<IUser>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const userAuthData = localStorage.getItem(STORAGE_KEYS.AUTH);
      state.authData = userAuthData ? JSON.parse(userAuthData) : undefined;
      state._inited = true;
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(STORAGE_KEYS.AUTH);
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
