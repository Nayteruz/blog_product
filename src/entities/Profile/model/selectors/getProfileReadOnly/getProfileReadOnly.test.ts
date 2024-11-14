import { StateSchema } from '@/app/providers/StoryProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadonly', () => {
  test('should work with data', () => {
    const state: DeepPartial<StateSchema> = {profile: {readonly: true,},};

    expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
  });
});
