import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoryProvider';
import { IComment } from '@/entities/Comment';
import { getArticleDetailsData } from '@/entities/Article';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<IComment, string, ThunkConfig<string>>(
  'articleDetailsPage/addCommentForArticle',
  async (textComment, thunkAPI) => {
    // eslint-disable-next-line
    const { extra, dispatch, rejectWithValue, getState } = thunkAPI;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<IComment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text: textComment,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (err) {
      return rejectWithValue(`${err}: error send comment`);
    }
  },
);
