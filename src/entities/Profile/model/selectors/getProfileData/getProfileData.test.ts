import { StateSchema } from '@/app/providers/StoryProvider';
import { getProfileData } from './getProfileData';
import { IProfile } from '../../types/profile';

describe('getProfileData', () => {
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

    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };

    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
