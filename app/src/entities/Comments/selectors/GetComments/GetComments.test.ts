import {GetComments} from "./GetComments";
import {StateSchema} from "../../../../app/providers/Store";
import {CommentsState} from "../../model/types/commentsState";

describe("GetComments", () => {
  test("should be defined", () => {
    const state = {
      comments: { loading: false, error: undefined, ids: [], entities: {}, data: undefined } as CommentsState
    } as StateSchema;
    expect(GetComments(state)).toEqual(state.comments);
  })
})