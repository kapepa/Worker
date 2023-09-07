import {ArticlesState} from "../../model/types/articlesState";
import {GetArticlesData} from "./GetArticlesData";
import {StateSchema} from "../../../../app/providers/Store";

describe("GetArticlesData", () => {
  test("should be return data from articles", () => {
    const articles: ArticlesState = { loading: false, error: undefined, data: undefined, ids: [], entities: {} }
    const state: StateSchema = { articles } as StateSchema;

    expect(GetArticlesData(state)).toBeUndefined();
  })
})