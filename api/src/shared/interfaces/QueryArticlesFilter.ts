import {OrderFieldFind} from "../Types/OrderFieldFind";
import {ArticlesFilterFields} from "../enum/ArticlesFilterFields";
import {ArticlesTypeKey} from "../../articles/interfaces/articles.interface";

export interface QueryArticlesFilter {
  take: string,
  skip: string,
  type: ArticlesTypeKey,
  search: string,
  order: OrderFieldFind,
  sort: ArticlesFilterFields,
}