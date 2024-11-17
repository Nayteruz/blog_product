import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoryProvider';
import {
  getArticlesPageHasMore,
  getArticlesPageLoading,
  getArticlesPageNumber,
} from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlesPageSlice';

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlePage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const isLoading = getArticlesPageLoading(getState());
    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPageNumber(getState());

    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(fetchArticlesList({ page: page + 1 }));
    }
  },
);

// TODO: add tests
