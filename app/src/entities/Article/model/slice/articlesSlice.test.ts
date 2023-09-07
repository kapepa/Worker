import {ArticlesState} from "../types/articlesState";
import ArticleMock from "../../../../shared/test/mock/article.json"
import {ArticleType} from "../types/articleType";
import {ArticlesReducer} from "./articlesSlice";
import {FetchAllArticles} from "../../service/FetchAllArticles/FetchAllArticles";

describe("articlesSlice", () => {
  const state: ArticlesState = {
    loading: false,
    data: undefined,
    error: undefined,
    ids: [],
    entities: {},
  }

  test("FetchAllArticles pending", () => {
    expect(ArticlesReducer(state, { type: FetchAllArticles.pending }).loading).toBeTruthy();
  })

  test("FetchAllArticles fulfilled", () => {
    const mockArticle = {...ArticleMock.article, blocks: [ArticleMock.text, ArticleMock.code, ArticleMock.image]} as ArticleType;
    const mockArticlesArr: ArticleType[] = [mockArticle];

    expect( ArticlesReducer(state, { type: FetchAllArticles.fulfilled, payload: mockArticlesArr }))
      .toEqual({...state, ids: [mockArticle.id], entities: {[mockArticle.id as string]: mockArticle}});
  })

  test("FetchAllArticles rejected", () => {
    const mockError = "all-articles-error";
    expect(ArticlesReducer(state, { type: FetchAllArticles.rejected, payload: mockError }).error).toEqual(mockError);
  })
})