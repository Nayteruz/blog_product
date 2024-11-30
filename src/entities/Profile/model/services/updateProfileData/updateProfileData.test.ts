import { IProfile, ValidateProfileError } from '../../types/profile';
import { updateProfileData } from './updateProfileData';
import { createTestAsyncThunk } from '@/shared/lib/tests/TextAyncThunk';

jest.mock('axios');

const data: IProfile = {
  id: '1',
  username: '123',
  age: 32,
  country: 'Russia',
  lastname: 'Nayter',
  first: 'Alex',
  city: 'Moscow',
  currency: 'USD',
};

describe('updateProfileData', () => {
  test('success', async () => {
    const thunk = createTestAsyncThunk(updateProfileData, { profile: { form: data } });
    thunk.api.put.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = createTestAsyncThunk(updateProfileData, { profile: { form: data } });
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = createTestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...data, lastname: '' 
        } 
      } 
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_DATA]);
  });

  test('validate multiple error', async () => {
    const thunk = createTestAsyncThunk(updateProfileData, {
      profile: {
        form: {
          ...data, lastname: '', age: undefined 
        } 
      },
    });
    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_DATA, ValidateProfileError.INCORRECT_AGE]);
  });
});
