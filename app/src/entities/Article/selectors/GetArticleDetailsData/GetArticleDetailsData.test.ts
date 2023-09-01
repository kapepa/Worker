import {StateSchema} from "../../../../app/providers/Store";
import {ArticleType} from "../../model/types/articleType";
import {GetArticleDetailsData} from "./GetArticleDetailsData";

describe("GetArticleDetailsData", () => {
  test("should be receive data", () => {
    const state: Partial<StateSchema> = { details: { loading: false, error: undefined, data: {id: "detailId", title: "Title"} as ArticleType} }
    expect(GetArticleDetailsData(state as StateSchema)).toEqual(state.details?.data);
  })
})