import { StateSchema } from '@/app/providers/StoryProvider';
import { getProfileValidateError } from './getProfileValidateError';

describe('getProfileValidateError', () => {
  test('should work with data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: ['SERVER_ERROR'],
      },
    };

    expect(getProfileValidateError(state as StateSchema)).toEqual(['SERVER_ERROR']);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateError(state as StateSchema)).toEqual(undefined);
  });
});
