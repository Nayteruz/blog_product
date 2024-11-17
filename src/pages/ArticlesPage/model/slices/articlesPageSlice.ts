import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IArticle } from '@/entities/Article';
import { IArticlesPageSchema } from '../types/articlesPageSchema';
import { StateSchema } from '@/app/providers/StoryProvider';
import { ArticleListView, TArticleListView } from '@/entities/Article/model/types/article';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { STORAGE_KEYS } from '@/shared/const/storageKeys';

const articlesAdapter = createEntityAdapter<IArticle>({ selectId: article => article.id });

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  state => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<IArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: (localStorage.getItem(STORAGE_KEYS.ARTICLES_VIEW) as TArticleListView) || ArticleListView.LIST,
    page: 1,
    hasMore: true,
  }),
  reducers: {
    setView: (state, action: PayloadAction<TArticleListView>) => {
      state.view = action.payload;
      localStorage.setItem(STORAGE_KEYS.ARTICLES_VIEW, action.payload);
    },
    initState: (state) => {
      const view = localStorage.getItem(STORAGE_KEYS.ARTICLES_VIEW) as TArticleListView;
      state.limit = view === ArticleListView.LIST ? 12 : 4;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.isLoading = false;
        articlesAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length > 0;
        if (state.limit && action.payload.length < state.limit) {
          state.hasMore = false;
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
