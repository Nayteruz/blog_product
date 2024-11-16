import { StateSchema } from '@/app/providers/StoryProvider';
import { ArticleListView } from '@/entities/Article/model/types/article';

export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleListView.LIST;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error || '';
export const getArticlesPageLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
