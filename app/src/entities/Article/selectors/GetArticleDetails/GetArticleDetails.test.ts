import {StateSchema} from "../../../../app/providers/Store";
import {ArticleType} from "../../model/types/articleType";
import {GetArticleDetails} from "./GetArticleDetails";

describe("GetArticleDetails", () => {
  test("should be return article state", () => {
    const state: Partial<StateSchema> = { details: { loading: false, error: undefined, data: {id: "detailId", title: "Title"} as ArticleType } }
    expect(GetArticleDetails(state as StateSchema)).toEqual(state.details);
  })
})