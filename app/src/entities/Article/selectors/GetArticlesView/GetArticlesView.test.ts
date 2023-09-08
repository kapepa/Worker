import {ArticlesState} from "../../model/types/articlesState";
import {ArticlesView} from "../../../../shared/const/ArticlesView";
import {StateSchema} from "../../../../app/providers/Store";
import {GetArticlesView} from "./GetArticlesView";

describe("GetArticlesView", () => {
  test("should be return view field from slice a articles", () => {
    const articles: ArticlesState = {view: ArticlesView.Square} as ArticlesState;
    const state: StateSchema = { articles } as StateSchema;

    expect(GetArticlesView(state)).toEqual(ArticlesView.Square);
  })
})