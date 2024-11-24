import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { fetchNextArticlePage } from './fetchNextArticlePage';
import { createTestAsyncThunk } from '@/shared/lib/tests/TextAyncThunk';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlePage', () => {
  test('success', async () => {
    const thunk = createTestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith();
  });

  test('fetch article not called', async () => {
    const thunk = createTestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test('fetch article hasMore is true', async () => {
    const thunk = createTestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
