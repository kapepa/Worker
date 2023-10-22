import {RecommendedState} from "../types/recommendedState";
import {RecommendedReducer} from "./recommendedSlice";
import {FetchRecommended} from "../../service/FetchRecommended/FetchRecommended";
import Article from "../../../../shared/test/mock/article.json"
import {ArticleType} from "../types/articleType";

describe("recommendedSlice", () => {
  const article: ArticleType = Article.article as ArticleType;
  const state: RecommendedState = {
    ids: [],
    entities: {},
    error: undefined,
    loading: false
  };

  test("FetchRecommended pending", () => {
    expect(RecommendedReducer(state, { type: FetchRecommended.pending }).loading).toBeTruthy();
  })

  test("FetchRecommended fulfilled", () => {
    expect(RecommendedReducer(state, {
      type: FetchRecommended.fulfilled,
      payload: [article]
    }).entities)
      .toEqual({[article.id as string]: article})
  })

  test("FetchRecommended rejected", () => {
    const mockTextError: string = "recommended-articles-error";
    expect(RecommendedReducer(state, {
      type: FetchRecommended.rejected,
      payload: mockTextError
    }).error)
      .toEqual(mockTextError);
  })
})