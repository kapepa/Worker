import {GetRecommendedEntities} from "./GetRecommendedEntities";
import {StateSchema} from "../../../../app/providers/Store";
import Article from "../../../../shared/test/mock/article.json";
import {ArticleType} from "../../model/types/articleType";

describe("GetRecommendedEntities", () => {
  const article: ArticleType = Article.article as ArticleType;
  test("should be return entities", () => {
    const state: StateSchema = {
      recommendedArticle: {
        error: undefined,
        loading: false,
        entities: {[article.id as string]: article},
        ids: [] as string[],
      }
    } as StateSchema

    expect(GetRecommendedEntities(state)).toEqual(state.recommendedArticle.entities);
  })
})