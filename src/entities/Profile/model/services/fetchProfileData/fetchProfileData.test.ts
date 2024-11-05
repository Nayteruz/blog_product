import { fetchProfileData } from './fetchProfileData';
import { createTestAsyncThunk } from '@/shared/lib/tests/TextAyncThunk';

jest.mock('axios');

const data = {
  username: '123',
  age: 32,
  country: 'Russia',
  lastname: 'Nayter',
  first: 'Alex',
  city: 'Moscow',
  currency: 'USD',
};

describe('fetchProfileData', () => {
  test('success', async () => {
    const thunk = createTestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = createTestAsyncThunk(fetchProfileData);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Error: failed fetch profile');
  });
});
