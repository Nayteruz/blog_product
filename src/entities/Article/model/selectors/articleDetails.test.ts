import { StateSchema } from '@/app/providers/StoryProvider';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsLoading,
} from './articleDetails';

describe('getArticleDetailsData', () => {
  test('should work with data', () => {
    const data = {
      id: '1',
      title: 'Test title',
    };

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});

describe('getArticleDetailsError', () => {
  test('should work with data', () => {
    const error = 'test error';

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error,
      },
    };

    expect(getArticleDetailsError(state as StateSchema)).toEqual(error);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined);
  });
});

describe('getArticleDetailsLoading', () => {
  test('should work with data', () => {
    const isLoading = true;

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading,
      },
    };

    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(isLoading);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(undefined);
  });
});
