import {ArticlesState} from "../../model/types/articlesState";
import {StateSchema} from "../../../../app/providers/Store";
import {GetArticlesIds} from "./GetArticlesIds";

describe("GetArticlesIds", () => {
  test("should be return array from ids articles", () => {
    const articles: ArticlesState = { ids: ["articlesID"], entities: {}, loading: false, error: undefined, data: undefined };
    const state: StateSchema = { articles } as StateSchema;

    expect(GetArticlesIds(state)).toEqual(articles.ids);
  })
})