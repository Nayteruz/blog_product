import { StateSchema } from '@/app/providers/StoryProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should work with data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'test error',
      },
    };

    expect(getProfileError(state as StateSchema)).toEqual('test error');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
