import {StateSchema} from "../../../../app/providers/Store";
import {GetRecommendedIds} from "./GetRecommendedIds";

describe("GetRecommendedIds", () => {
  test("should be return ids", () => {
    const state: StateSchema = {
      recommendedArticle: {
        error: undefined,
        loading: false,
        entities: {},
        ids: ["mockID"] as string[],
      }
    } as StateSchema;

    expect(GetRecommendedIds(state)).toEqual(state.recommendedArticle.ids);
  })
})