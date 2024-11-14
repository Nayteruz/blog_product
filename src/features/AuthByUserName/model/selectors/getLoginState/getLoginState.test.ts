import { StateSchema } from '@/app/providers/StoryProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginState(state as StateSchema)).toEqual({
      username: '',
      password: '',
      error: '',
      isLoading: false,
    });
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {loginForm: {error: 'error',},};

    expect(getLoginState(state as StateSchema)).toEqual({ error: 'error' });
  });

  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {loginForm: {username: 'username',},};

    expect(getLoginState(state as StateSchema)).toEqual({username: 'username',});
  });

  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {loginForm: {password: 'password',},};

    expect(getLoginState(state as StateSchema)).toEqual({password: 'password',});
  });

  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = {loginForm: {isLoading: true,},};

    expect(getLoginState(state as StateSchema)).toEqual({ isLoading: true });
  });
});
