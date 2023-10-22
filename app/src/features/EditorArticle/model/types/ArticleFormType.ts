import {ArticleType} from "../../../../entities/Article/model/types/articleType";

type PickArticleType =  Pick<ArticleType, "id" | "title" | "subtitle" | "type" | "blocks" >

export type ArticleFormImgType = string | File;

export interface ArticleFormType extends PickArticleType{
  img: ArticleFormImgType,
};