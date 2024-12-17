import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoryProvider';
import { IComment } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<IComment[], string | undefined, ThunkConfig<string>>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const {
      extra, rejectWithValue 
    } = thunkAPI;
    const apiUrl = '/comments';

    if (!articleId) {
      return rejectWithValue('articleId not get');
    }

    try {
      const response = await extra.api.get<IComment[]>(apiUrl, {
        params: {
          articleId,
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error('failed fetch article by id');
      }

      return response.data;
    } catch (err) {
      return rejectWithValue(`${err}`);
    }
  },
);

// TODO: add tests
