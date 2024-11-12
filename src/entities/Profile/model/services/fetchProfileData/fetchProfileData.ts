import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoryProvider';
import { IProfile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<IProfile, string, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.get<IProfile>(`/profile/${profileId}`);

      if (!response.data) {
        throw new Error('failed fetch profile');
      }

      return response.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(`${err}`);
    }
  },
);
