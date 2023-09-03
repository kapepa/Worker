import {GetFormComment, StateSchema} from "../../../../app/providers/Store";
import {FormCommentState} from "../../model/types/formCommentState";

describe("GetFormComment", () => {
  test("should be get FormCommentState", () => {
    const formComment: FormCommentState = { loading: false, error: undefined, text: "" };
    const state: StateSchema = { formComment } as StateSchema;

    expect(GetFormComment(state)).toEqual(formComment);
  })
})