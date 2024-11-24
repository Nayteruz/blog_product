import { IUser } from '@/entities/User';

export const ArticleSortField = {
  VIEWS: 'views',
  TITLE: 'title',
  CREATED_AT: 'createdAt',
} as const;

export type TArticleSortField = (typeof ArticleSortField)[keyof typeof ArticleSortField];

export const ArticleBlockType = {
  ALL: 'All',
  IT: 'IT',
  SCIENCE: 'Science',
  SECURITY: 'Security',
  AI: 'AI',
  FINANCE: 'Finance',
  TELECOMMUNICATIONS: 'Telecommunications',
  ENTERTAINMENT: 'Entertainment',
} as const;

export type TArticleBlockType = (typeof ArticleBlockType)[keyof typeof ArticleBlockType];

export const ArticleViewType = {
  CODE: 'CODE',
  IMAGE: 'IMAGE',
  TEXT: 'TEXT',
} as const;

export type TArticleViewType = (typeof ArticleViewType)[keyof typeof ArticleViewType];

export const ArticleListView = {
  LIST: 'list',
  SIMPLE: 'simple',
} as const;

export type TArticleListView = (typeof ArticleListView)[keyof typeof ArticleListView];

export interface IArticleBaseBlock {
  id: string;
  type: TArticleViewType;
}

export interface IArticleCodeBlock extends IArticleBaseBlock {
  type: typeof ArticleViewType.CODE;
  code: string;
}

export interface IArticleImageBlock extends IArticleBaseBlock {
  type: typeof ArticleViewType.IMAGE;
  src: string;
  title: string;
}

export interface IArticleTextBlock extends IArticleBaseBlock {
  type: typeof ArticleViewType.TEXT;
  paragraphs: string[];
  title?: string;
}

export type TArticleBlock = IArticleCodeBlock | IArticleImageBlock | IArticleTextBlock;

export interface IArticle {
  id: string;
  title: string;
  user: IUser;
  subtitle: string;
  img: string;
  views: number;
  createdAt: number;
  type: TArticleBlockType[];
  blocks?: TArticleBlock[];
}
