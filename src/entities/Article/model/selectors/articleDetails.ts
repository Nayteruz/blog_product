import { StateSchema } from '@/app/providers/StoryProvider';

export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data;
export const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;
export const getArticleDetailsLoading = (state: StateSchema) => state.articleDetails?.isLoading;
