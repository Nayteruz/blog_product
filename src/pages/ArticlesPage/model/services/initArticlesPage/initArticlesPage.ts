import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoryProvider';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { TSortOrder } from '@/shared/types';
import { ArticleBlockType, ArticleSortField, TArticleSortField } from '@/entities/Article';
import { TArticleBlockType } from '@/entities/Article/model/types/article';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      const orderFromUrl = searchParams.get('order') || 'asc';
      const sortFromUrl = searchParams.get('sort') || ArticleSortField.CREATED_AT;
      const searchFromUrl = searchParams.get('search') || '';
      const typeFromUrl = searchParams.get('type') || ArticleBlockType.ALL;

      if (orderFromUrl) {
        dispatch(articlesPageActions.setOrder(orderFromUrl as TSortOrder));
      }

      if (sortFromUrl) {
        dispatch(articlesPageActions.setSort(sortFromUrl as TArticleSortField));
      }

      if (searchFromUrl) {
        dispatch(articlesPageActions.setSearch(searchFromUrl));
      }

      if (typeFromUrl) {
        dispatch(articlesPageActions.setType(typeFromUrl as TArticleBlockType));
      }

      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList());
    }
  },
);

// TODO: add tests
