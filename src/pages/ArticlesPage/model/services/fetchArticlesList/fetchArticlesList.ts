import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoryProvider';
import { IArticle } from '@/entities/Article';

export const fetchArticlesList = createAsyncThunk<IArticle[], void, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    const apiUrl = '/articles';

    try {
      const response = await extra.api.get<IArticle[]>(apiUrl, { params: { _expand: 'user' } });

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
