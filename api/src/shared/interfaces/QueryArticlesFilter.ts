import {OrderFieldFind} from "../Types/OrderFieldFind";
import {ArticlesFilterFields} from "../enum/ArticlesFilterFields";

export interface QueryArticlesFilter {
  take: string,
  skip: string,
  search: string,
  order: OrderFieldFind,
  sort: ArticlesFilterFields,
}