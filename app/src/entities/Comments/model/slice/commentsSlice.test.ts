import {CommentsState} from "../types/commentsState";
import {CommentsReducer} from "./commentsSlice";
import {FetchCommentsArtById} from "../../services/FetchCommentsArtById/FetchCommentsArtById";
import CommentsMock from "../../../../shared/test/mock/comments.json";
import {CommentsTypes} from "../types/commentsTypes";
import {DeleteCommentById} from "../../services/DeleteCommentById/DeleteCommentById";

describe("commentSlice", () => {
  const state: CommentsState = {
    loading: false,
    error: undefined,
    ids: [],
    entities: {},
    data: [],
  };
  const mockComment = [CommentsMock] as CommentsTypes[];

  test("should be defined", () => {
    const mockState = Object.assign({}, state);
    expect(CommentsReducer( mockState, { type: FetchCommentsArtById.pending }))
      .toEqual({...mockState, loading: true});
  })

  test("FetchCommentsArtById pending", () => {
    const mockState = Object.assign({}, state);
    expect(CommentsReducer(
      mockState,
      { type: FetchCommentsArtById.pending}
    ))
      .toEqual({...mockState, loading: true});
  })

  test("FetchCommentsArtById fulfilled", () => {
    const mockState = Object.assign({}, state);
    expect(CommentsReducer(
      {...mockState, data: [mockComment]},
      { type: FetchCommentsArtById.fulfilled, payload: mockComment}
    ))
      .toEqual({...mockState, data: mockComment, ids: [CommentsMock.id], entities: {[CommentsMock.id]: CommentsMock}});
  })

  test("DeleteCommentById pending", () => {
    const mockState = Object.assign({}, state);
    expect(CommentsReducer(
      mockState,
      {type: DeleteCommentById.pending}
    ))
      .toEqual({...mockState, loading: true});
  })

  test("DeleteCommentById fulfilled", () => {
    const mockState = Object.assign({}, {...state, ids: [CommentsMock.id], entities: {[CommentsMock.id]: CommentsMock}});
    expect(CommentsReducer(
      mockState,
      {type: DeleteCommentById.fulfilled, payload: CommentsMock.id}
    ))
      .toEqual(state);
  })
})