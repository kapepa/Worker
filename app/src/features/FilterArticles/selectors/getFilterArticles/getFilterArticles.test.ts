import {ArticleOrderSort} from "../../../../shared/const/ArticleOrderSort";
import {ArticleOrderField} from "../../../../shared/const/ArticleOrderField";
import {ArticleTypesAdditionName} from "../../../../shared/const/ArticleTypesTabs";
import {ArticlesQuery} from "../../../../shared/const/ArticlesQuery";
import {GetFilterArticles} from "./getFilterArticles";
import {StateSchema} from "../../../../app/providers/Store";

describe("GetFilterArticles", () => {
  test("should be receive filterArticles slice", () => {
    const state: StateSchema = {
      filterArticles: {
        order: ArticleOrderSort.DESC,
        sort: ArticleOrderField.CREATED,
        tab: ArticleTypesAdditionName.ALL,
        search: "",
        skip: ArticlesQuery.Skip,
        take: ArticlesQuery.Take,
      }
    } as StateSchema;
    expect(GetFilterArticles(state)).toEqual(state.filterArticles);
  })
})