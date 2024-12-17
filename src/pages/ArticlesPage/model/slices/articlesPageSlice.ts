import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  IArticle, ArticleListView, TArticleListView, TArticleSortField, ArticleSortField 
} from '@/entities/Article';
import { IArticlesPageSchema } from '../types/articlesPageSchema';
import { StateSchema } from '@/app/providers/StoryProvider';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { STORAGE_KEYS } from '@/shared/const/storageKeys';
import { TSortOrder } from '@/shared/types';
import { ArticleBlockType, TArticleBlockType } from '@/entities/Article/model/types/article';

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
    _inited: false,
    limit: 12,
    sort: ArticleSortField.CREATED_AT,
    order: 'asc',
    search: '',
    type: ArticleBlockType.ALL,
  }),
  reducers: {
    setView: (state, action: PayloadAction<TArticleListView>) => {
      state.view = action.payload;
      localStorage.setItem(STORAGE_KEYS.ARTICLES_VIEW, action.payload);
    },
    initState: (state) => {
      const view = localStorage.getItem(STORAGE_KEYS.ARTICLES_VIEW) as TArticleListView;
      state.view = view;
      state.limit = view === ArticleListView.LIST ? 12 : 4;
      state._inited = true;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setSort: (state, action: PayloadAction<TArticleSortField>) => {
      state.sort = action.payload;
    },
    setOrder: (state, action: PayloadAction<TSortOrder>) => {
      state.order = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<TArticleBlockType>) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;

        if (action.meta.arg?.replace) {
          articlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;

        if (action.meta.arg?.replace) {
          articlesAdapter.setAll(state, action.payload);
        } else {
          articlesAdapter.addMany(state, action.payload);
        }

        state.hasMore = action.payload.length >= state.limit;
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  reducer: articlesPageReducer, actions: articlesPageActions 
} = articlesPageSlice;
