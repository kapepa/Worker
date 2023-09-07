import {StateSchema} from "../../../../app/providers/Store";
import {ArticlesState} from "../../model/types/articlesState";
import {GetArticles} from "./GetArticles";

describe("GetArticles", () => {
  test("should be return articles", () => {
    const articles: ArticlesState = { loading: false, error: undefined, data: undefined, ids: [], entities: {} }
    const state: StateSchema = { articles } as StateSchema;

    expect(GetArticles(state)).toEqual(articles);
  })
})