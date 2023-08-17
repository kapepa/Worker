export enum ArticlesBlockType {
  CODE = 'CODE',
  IMAGE = 'IMAGE',
  TEXT = 'TEXT',
}

interface ArticlesBlockBase {
  id: string,
  type: ArticlesBlockType,
}

export interface BlocksCodeInterface extends ArticlesBlockBase{
  type: ArticlesBlockType.CODE,
  code: string,
}

export interface BlocksImageInterface extends ArticlesBlockBase{
  type: ArticlesBlockType.IMAGE,
  src: string,
  title?: string,
}

export interface BlocksTextInterface extends ArticlesBlockBase{
  type: ArticlesBlockType.TEXT,
  title?: string,
  paragraphs: string[]
}
