import {ArticlesState} from "../../model/types/articlesState";
import {ArticlesView} from "../../../../shared/const/ArticlesView";
import {StateSchema} from "../../../../app/providers/Store";
import {GetArticlesHasMore} from "./GetArticlesHasMore";

describe("GetArticlesHasMore", () => {
  test("should be return hasMore", () => {
    const articles: ArticlesState = {
      loading: false,
      error: undefined,
      data: undefined,
      ids: [],
      entities: {},
      view: ArticlesView.Block,
      hasMore: true,
    }
    const state: StateSchema = { articles } as StateSchema;

    expect(GetArticlesHasMore(state)).toBeTruthy();
  })
})