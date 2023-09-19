import {ArticleOrderSort} from "../../../../shared/const/ArticleOrderSort";
import {ArticleOrderField} from "../../../../shared/const/ArticleOrderField";

export interface FilterArticlesState {
  order: ArticleOrderSort,
  sort: ArticleOrderField,
  search: string,
  take: number
  skip: number
}