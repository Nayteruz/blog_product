import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoryProvider';
import { IArticle } from '../../types/article';

export const fetchArticleById = createAsyncThunk<IArticle, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    const apiUrl = `/articles/${articleId}`;

    try {
      const response = await extra.api.get<IArticle>(apiUrl);

      if (!response.data) {
        throw new Error('failed fetch article by id');
      }

      return response.data;
    } catch (err) {
      console.error(err);
      return rejectWithValue(`${err}`);
    }
  },
);

// TODO: add tests
