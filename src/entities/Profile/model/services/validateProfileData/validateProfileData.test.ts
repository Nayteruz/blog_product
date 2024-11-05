import { IProfile, ValidateProfileError } from '../../types/profile';
import { validateProfileData } from './validateProfileData';

jest.mock('axios');

const data: IProfile = {
  username: '123',
  age: 32,
  country: 'Russia',
  lastname: 'Nayter',
  first: 'Alex',
  city: 'Moscow',
  currency: 'USD',
};

describe('validateProfileData', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first and lastname', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_DATA]);
  });

  test('with age as string', async () => {
    // @ts-ignore
    const result = validateProfileData({ ...data, age: '32' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('without country', async () => {
    // @ts-ignore
    const result = validateProfileData({ ...data, country: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('multiple errors', async () => {
    // @ts-ignore
    const result = validateProfileData({ ...data, country: '', age: '32' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_COUNTRY]);
  });
});
