import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { STORAGE_KEYS } from '@/shared/const/storageKeys';
import { ThunkConfig } from '@/app/providers/StoreProvider';

export const fetchProfileData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.post('/login', authData);
      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue('Incorect login or password');
    }
  },
);
