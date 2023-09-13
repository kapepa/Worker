import {StateSchema} from "../../../../app/providers/Store";
import {ArticlesState} from "../../model/types/articlesState";
import {GetArticles} from "./GetArticles";
import {ArticlesView} from "../../../../shared/const/ArticlesView";

describe("GetArticles", () => {
  test("should be return articles", () => {
    const articles: ArticlesState = {
      loading: false,
      error: undefined,
      data: undefined,
      ids: [],
      entities: {},
      view: ArticlesView.Block,
      hasMore: false,
    }
    const state: StateSchema = { articles } as StateSchema;

    expect(GetArticles(state)).toEqual(articles);
  })
})