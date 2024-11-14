import { StateSchema } from '@/app/providers/StoryProvider';
import { getProfileForm } from './getProfileForm';
import { IProfile } from '../../types/profile';

describe('getProfileForm', () => {
  test('should work with data', () => {
    const data: IProfile = {
      first: 'Alex',
      lastname: 'Nayter',
      age: 32,
      currency: 'USD',
      country: 'Russia',
      city: 'Moscow',
      username: 'AlexNayter',
    };

    const state: DeepPartial<StateSchema> = {profile: {form: data,},};

    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
