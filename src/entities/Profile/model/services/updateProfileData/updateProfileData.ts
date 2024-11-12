import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoryProvider';
import { IProfile, TValidateProfileError, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<IProfile, void, ThunkConfig<TValidateProfileError[]>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const formData = getProfileForm(getState());

    const errors = validateProfileData(formData);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<IProfile>(`/profile/${formData?.id}`, formData);

      if (!response.data) {
        throw new Error('failed update profile');
      }

      return response.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  },
);
