import Axios from "../../../../utils/axios";
import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../app/providers/Store";
import {CommentsTypes} from "../../model/types/commentsTypes";
import CommentMock from "../../../../shared/test/mock/comments.json";
import {FetchCommentsArtById} from "./FetchCommentsArtById";

jest.mock("../../../../utils/axios");
const mockAxios = jest.mocked(Axios, true);

describe("FetchCommentsArtById", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;
  let commentMock = CommentMock as CommentsTypes;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test("should be fulfilled", async () => {
    mockAxios.get.mockResolvedValue({data: commentMock });
    let action = FetchCommentsArtById({artId: "artId", query: { skip: 0, take: 1 }});
    let result = await action(dispatch, getState, {});

    expect(mockAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toEqual(commentMock);
  });

  test("should be rejected", async () => {
    mockAxios.get.mockRejectedValue({status: 403});
    let action = FetchCommentsArtById({artId: "artId", query: { skip: 0, take: 1 }});
    let result = await action(dispatch, getState, {});

    expect(mockAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
    expect(result.payload).toEqual("error-comments");
  });
})