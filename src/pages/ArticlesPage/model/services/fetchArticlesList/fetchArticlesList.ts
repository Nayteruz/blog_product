import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoryProvider';
import { IArticle } from '@/entities/Article';
import { getArticlesPageLimit } from '../../selectors/articlesPageSelectors';

interface IFetchArticlesList {
  page: number;
}

export const fetchArticlesList = createAsyncThunk<IArticle[], IFetchArticlesList, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (props, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const { page = 1 } = props;
    const limit = getArticlesPageLimit(getState());
    const apiUrl = '/articles';

    try {
      const response = await extra.api.get<IArticle[]>(apiUrl, {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
        },
      });

      if (!response.data) {
        throw new Error('failed aticles list');
      }

      return response.data;
    } catch (err) {
      return rejectWithValue(`${err}`);
    }
  },
);

// TODO: add tests
