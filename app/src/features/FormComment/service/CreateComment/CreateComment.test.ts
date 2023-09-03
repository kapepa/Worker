import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../app/providers/Store";
import Axios from "../../../../utils/axios";
import {CommentsTypes} from "../../../../entities/Comments";
import {UsersTypes} from "../../../../entities/Users";
import {ArticleType} from "../../../../entities/Article/model/types/articleType";
import {CreateComment} from "./CreateComment";

jest.mock("../../../../utils/axios");
const mockAxios = jest.mocked(Axios, true);

describe("CreateComment", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;
  let mockText = "some text";
  let mockComment: CommentsTypes = {
    id: "commentID",
    text: mockText,
    users: { id: "userID" } as UsersTypes,
    articles: { id: "articleID" } as ArticleType
  }

  beforeEach(() => {
    dispatch = jest.fn();
  })

  test("should be fulfilled", async () => {
    getState = jest.fn(() => (
      {
        users: { profile: { id: "userID" } },
        details: { data: { id: "articleID" } }
      } as StateSchema
    ))

    mockAxios.post.mockResolvedValue({ data: mockComment });
    let action = CreateComment(mockText);
    let result = await action(dispatch, getState, {});

    expect(mockAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toEqual(mockComment)
  })

  test("should be rejected", async () => {
    getState = jest.fn(() => (
      {
        users: { profile: { id: "userID" } },
        details: { data: { id: "articleID" } }
      } as StateSchema
    ))

    mockAxios.post.mockRejectedValue({ status: 403 });
    let action = CreateComment(mockText);
    let result = await action(dispatch, getState, {});

    expect(mockAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
    expect(result.payload).toEqual("create-comment-error")
  })

  test("should be rejected", async () => {
    getState = jest.fn(() => (
      {
        users: { profile: undefined },
        details: { data: undefined },
      } as StateSchema
    ))

    mockAxios.post.mockResolvedValue({ data: mockComment });
    let action = CreateComment(mockText);
    let result = await action(dispatch, getState, {});

    expect(result.payload).toEqual("create-comment-error")
  })
})