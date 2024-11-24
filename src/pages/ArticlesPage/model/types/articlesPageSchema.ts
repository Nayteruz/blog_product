import { EntityState } from '@reduxjs/toolkit';
import { IArticle, TArticleListView, TArticleSortField } from '@/entities/Article';
import { TSortOrder } from '@/shared/types';
import { TArticleBlockType } from '@/entities/Article/model/types/article';

export interface IArticlesPageSchema extends EntityState<IArticle> {
  isLoading?: boolean;
  error?: string;

  // pagination
  page: number;
  limit: number;
  hasMore: boolean;

  // filters
  view: TArticleListView;
  order: TSortOrder;
  search: string;
  sort: TArticleSortField;
  type: TArticleBlockType;

  _inited: boolean;
}
