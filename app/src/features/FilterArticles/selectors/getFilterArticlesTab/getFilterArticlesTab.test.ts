import {StateSchema} from "../../../../app/providers/Store";
import {ArticleTypesAdditionName} from "../../../../shared/const/ArticleTypesTabs";
import {GetFilterArticlesTab} from "./getFilterArticlesTab";

describe("GetFilterArticlesTab", () => {
  test("should be return tab", () => {
    const state: StateSchema = {
      filterArticles: {
        tab: ArticleTypesAdditionName.ALL,
      }
    } as StateSchema

    expect(GetFilterArticlesTab(state)).toEqual(state.filterArticles.tab);
  })
})