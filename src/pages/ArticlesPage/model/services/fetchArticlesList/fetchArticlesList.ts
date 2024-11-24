import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoryProvider';
import { ArticleBlockType, IArticle } from '@/entities/Article';
import {
  getArticlesPageLimit,
  getArticlesPageNumber,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/articlesPageSelectors';
import { addQueryParams } from '@/shared/lib';

interface IFetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<IArticle[], IFetchArticlesListProps | void, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const limit = getArticlesPageLimit(getState());
    const sort = getArticlesPageSort(getState());
    const order = getArticlesPageOrder(getState());
    const search = getArticlesPageSearch(getState());
    const page = getArticlesPageNumber(getState());
    const type = getArticlesPageType(getState());
    const apiUrl = '/articles';

    try {
      addQueryParams({
        sort,
        order,
        search,
        type,
      });
      const response = await extra.api.get<IArticle[]>(apiUrl, {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleBlockType.ALL ? undefined : type,
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
