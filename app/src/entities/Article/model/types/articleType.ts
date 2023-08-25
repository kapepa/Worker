import {ArticleBlocImage, ArticleBlockCode, ArticleBlockText} from "./articleBlock";
import {UsersTypes} from "../../../Users";

export enum ArticleTypesKey {
  IT = "IT",
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export type ArticleBlocks = ArticleBlockCode | ArticleBlocImage | ArticleBlockText;

export interface ArticleType {
  id?: string,
  title: string,
  subtitle: string,
  img: string,
  views: number,
  createdAt?: Date | string,
  type: ArticleTypesKey[],
  blocks?: ArticleBlocks[],
  users?: UsersTypes,
}