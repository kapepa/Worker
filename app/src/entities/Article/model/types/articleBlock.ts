export enum ArticleBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

interface ArticleBlockBase {
  id?: string,
  type: ArticleBlockType,
}

export interface ArticleBlockCode extends ArticleBlockBase{
  type: ArticleBlockType.CODE,
  code: string,
}

export interface ArticleBlocImage extends ArticleBlockBase{
  type: ArticleBlockType.IMAGE,
  src: string,
  title?: string,
}

export interface ArticleBlockText extends ArticleBlockBase{
  type: ArticleBlockType.TEXT,
  title?: string,
  paragraphs: string[]
}
