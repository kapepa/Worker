import {ArticleOrderSort} from "../../../../shared/const/ArticleOrderSort";
import {GetFilterArticlesOrder} from "./getFilterArticlesOrder";
import {StateSchema} from "../../../../app/providers/Store";

describe("GetFilterArticlesOrder", () => {
  test("should be return order", () => {
    const state: StateSchema = {
      filterArticles: {
        order: ArticleOrderSort.DESC,
      }
    } as StateSchema;
    expect(GetFilterArticlesOrder(state)).toEqual(state.filterArticles.order);
  })
})