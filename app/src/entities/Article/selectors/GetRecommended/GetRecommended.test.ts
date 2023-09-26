import {StateSchema} from "../../../../app/providers/Store";
import {GetRecommended} from "./GetRecommended";

describe("GetRecommended", () => {
  test("should be return RecommendedState", () => {
    const state: StateSchema = {
      recommendedArticle: {
        error: undefined,
        loading: false,
        entities: {},
        ids: [] as string[],
      }
    } as StateSchema

    expect(GetRecommended(state)).toEqual(state.recommendedArticle);
  })
})