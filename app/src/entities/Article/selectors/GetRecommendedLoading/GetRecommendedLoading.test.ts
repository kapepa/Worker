import {StateSchema} from "../../../../app/providers/Store";
import {GetRecommendedLoading} from "./GetRecommendedLoading";

describe("GetRecommendedLoading", () => {
  test("should be return loading", () => {
    const state: StateSchema = {
      recommendedArticle: {
        error: undefined,
        loading: true,
        entities: {},
        ids: [] as string[],
      }
    } as StateSchema;

    expect(GetRecommendedLoading(state)).toBeTruthy();
  })
})