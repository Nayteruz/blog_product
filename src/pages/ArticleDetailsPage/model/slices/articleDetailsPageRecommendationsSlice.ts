import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoryProvider';
import { IArticleDetailsRecommendationsSchema } from '../types/articleDetailsRecommendationSchema';
import { IArticle } from '@/entities/Article';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<IArticle>({ selectId: article => article.id });

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  state => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const articleDetailsPageRecommendationsSlice = createSlice({
  name: 'articleDetailsPageRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<IArticleDetailsRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action: PayloadAction<IArticle[]>) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice;
