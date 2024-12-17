import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoryProvider';
import { IArticle } from '@/entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<IArticle[], void, ThunkConfig<string>>(
  'articleDetailsPage/fetchArticleRecommendations',
  async (_, thunkAPI) => {
    const {
      extra, rejectWithValue 
    } = thunkAPI;
    const apiUrl = '/articles';

    try {
      const response = await extra.api.get<IArticle[]>(apiUrl, { params: { _limit: 8 } });

      if (!response.data) {
        throw new Error('failed fetch articles recommendations');
      }

      return response.data;
    } catch (err) {
      return rejectWithValue(`${err}`);
    }
  },
);

// TODO: add tests
