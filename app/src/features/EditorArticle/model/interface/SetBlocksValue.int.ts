import {
  ArticleBlocImage,
  ArticleBlockCode,
  ArticleBlockText
} from "../../../../entities/Article/model/types/articleBlock";
import {ArticleFormImgType} from "../types/ArticleFormType";

export interface SetBlocksValueInt {
  index: number,
  name: keyof ArticleBlockCode | keyof ArticleBlocImage | keyof ArticleBlockText,
  value: string | ArticleFormImgType,
}