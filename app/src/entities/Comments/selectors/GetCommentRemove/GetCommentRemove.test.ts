import {CommentsState} from "../../model/types/commentsState";
import {StateSchema} from "../../../../app/providers/Store";
import Comment from "../../../../shared/test/mock/comments.json"
import {GetCommentRemove} from "./GetCommentRemove";

describe("GetCommentRemove", () => {
  test("a comment must be returned that removes", () => {
    const state = { comments: { remove: { index: 0, comment: Comment } } as CommentsState } as StateSchema;
    expect(GetCommentRemove(state)).toEqual(state.comments);
  })
})