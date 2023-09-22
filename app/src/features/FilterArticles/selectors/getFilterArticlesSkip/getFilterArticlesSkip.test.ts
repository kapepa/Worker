import {StateSchema} from "../../../../app/providers/Store";
import {ArticlesQuery} from "../../../../shared/const/ArticlesQuery";
import {GetFilterArticlesSkip} from "./getFilterArticlesSkip";

describe("GetFilterArticlesSkip", () => {
  test("should be return skip", () => {
    const state: StateSchema = {
      filterArticles: {
        skip: ArticlesQuery.Skip,
      }
    } as StateSchema;

    expect(GetFilterArticlesSkip(state)).toEqual(state.filterArticles.skip);
  })
})