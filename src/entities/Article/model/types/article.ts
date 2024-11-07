export const ArticleBlockType = {
  IT: 'IT',
  SCIENCE: 'SCIENCE',
  EXONOMICS: 'EXONOMICS',
} as const;

export type TArticleBlockType = typeof ArticleBlockType[keyof typeof ArticleBlockType];

export const ArticleViewType = {
  CODE: 'CODE',
  IMAGE: 'IMAGE',
  TEXT: 'TEXT',
} as const;

export type TArticleViewType = typeof ArticleViewType[keyof typeof ArticleViewType];

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
  title?: string;
  subtitle?: string;
  img?: string;
  views: number;
  createdAt: number;
  type: TArticleBlockType[];
  blocks?: TArticleBlock[];
}
