import {ArticleType} from "../../../../entities/Article/model/types/articleType";

export interface FetchAllArticlesRes {
  articles: ArticleType[],
  replace: boolean,
  hasMore: boolean,
}