import {ArticleType} from "../../../../entities/Article/model/types/articleType";

export type ArticleFormType = Pick<ArticleType, "id" | "title" | "subtitle" | "img" | "type" | "blocks" >;