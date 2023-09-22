import {StateSchema} from "../../../../app/providers/Store";
import {ArticlesQuery} from "../../../../shared/const/ArticlesQuery";
import {GetFilterArticlesTake} from "./getFilterArticlesTake";

describe("GetFilterArticlesTake", () => {
  test("should be return take", () => {
    const state: StateSchema = {
      filterArticles: {
        take: ArticlesQuery.Take,
      }
    } as StateSchema;

    expect(GetFilterArticlesTake(state)).toEqual(state.filterArticles.take);
  })
})