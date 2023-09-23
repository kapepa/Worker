import {StateSchema} from "../../../../app/providers/Store";
import {ArticleOrderField} from "../../../../shared/const/ArticleOrderField";
import {GetFilterArticlesSort} from "./getFilterArticlesSort";

describe("GetFilterArticlesSort", () => {
  test("should be return  sort", () => {
    const state: StateSchema = {
      filterArticles: {
        sort: ArticleOrderField.CREATED,
      }
    } as StateSchema;

    expect(GetFilterArticlesSort(state)).toEqual(state.filterArticles.sort);
  })
})