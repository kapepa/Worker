import {FormCommentState} from "../types/formCommentState";
import {FormCommentActions, FormCommentReducer} from "./formCommentSlice";
import {CreateComment} from "../../service/CreateComment/CreateComment";

describe("formCommentSlice", () => {
  const state: FormCommentState = { loading: false, error: undefined, text: undefined };

  test("changeComment", () => {
    const mockComment = "some comment";
    expect(FormCommentReducer(state, FormCommentActions.changeComment(mockComment)).text).toEqual(mockComment)
  })

  test("CreateComment pending", () => {
    expect(FormCommentReducer(state, CreateComment.pending).loading).toBeTruthy();
  })

  test("CreateComment fulfilled", () => {
    expect(FormCommentReducer({...state, loading: true}, CreateComment.pending).loading).toBeFalsy();
  })
})