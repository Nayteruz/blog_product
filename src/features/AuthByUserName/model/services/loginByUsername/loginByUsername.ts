import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUser, userActions } from '@/entities/User';
import { STORAGE_KEYS } from '@/shared/const/storageKeys';
import { ThunkConfig } from '@/app/providers/StoryProvider';

interface ILoginByUsername {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<IUser, ILoginByUsername, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.post('/login', authData);
      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      return response.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue('Incorect login or password');
    }
  },
);
