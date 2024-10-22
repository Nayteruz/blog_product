import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { STORAGE_KEYS } from '@/shared/const/storageKeys';

interface ILoginByUsername {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, ILoginByUsername>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (err) {
      console.error(err);
      return thunkAPI.rejectWithValue('Incorect login or password');
    }
  },
);
