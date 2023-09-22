import {ArticleOrderSort} from "../../../../shared/const/ArticleOrderSort";
import {ArticleOrderField} from "../../../../shared/const/ArticleOrderField";
import {ArticleTypesTabs} from "../../../../shared/const/ArticleTypesTabs";

export interface FilterArticlesState {
  order: ArticleOrderSort,
  sort: ArticleOrderField,
  tab: ArticleTypesTabs,
  search: string,
  take: number,
  skip: number,
}