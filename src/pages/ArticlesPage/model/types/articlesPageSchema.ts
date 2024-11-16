import { EntityState } from '@reduxjs/toolkit';
import { IArticle, TArticleListView } from '@/entities/Article';

export interface IArticlesPageSchema extends EntityState<IArticle> {
  isLoading?: boolean;
  error?: string;

  view: TArticleListView;
}
