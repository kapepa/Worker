import {BlocksCodeInterface, BlocksImageInterface, BlocksTextInterface} from "./blocks.interface";

export enum ArticlesTypeKey {
  IT = "IT",
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export type ArticlesBlocks = BlocksCodeInterface | BlocksImageInterface | BlocksTextInterface;

export interface ArticlesInterface {
  id: string,
  title: string,
  subtitle: string,
  img: string,
  views: number,
  createdAt: Date,
  type: ArticlesTypeKey[],
  blocks: ArticlesBlocks,
}
