import {GetCommentsLoader} from "./GetCommentsLoader";
import {CommentsState} from "../../model/types/commentsState";
import {StateSchema} from "../../../../app/providers/Store";

describe("GetCommentsLoader", () => {
  test("should be defined", () => {
    const state = { comments: { loading: true } as CommentsState } as StateSchema;
    expect(GetCommentsLoader(state)).toEqual(true)
  })
})