import {CommentsState} from "../types/commentsState";
import {CommentsReducer} from "./commentsSlice";
import {FetchCommentsArtById} from "../../services/FetchCommentsArtById/FetchCommentsArtById";
import CommentsMock from "../../../../shared/test/mock/comments.json";
import {CommentsTypes} from "../types/commentsTypes";

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
    expect(CommentsReducer( mockState, FetchCommentsArtById.pending))
      .toEqual({...mockState, loading: true});
  })

  test("should be defined", () => {
    const mockState = Object.assign({}, state);
    expect(CommentsReducer(
      {...mockState, data: [mockComment]},
      FetchCommentsArtById.fulfilled(mockComment, "", { artId: CommentsMock.id, query: {take: 1, skip: 0} })
    ))
      .toEqual({...mockState, data: mockComment, ids: [CommentsMock.id], entities: {[CommentsMock.id]: CommentsMock}});
  })
})