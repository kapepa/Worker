import Axios from "../../../../utils/axios";
import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../app/providers/Store";
import {DeleteCommentById} from "./DeleteCommentById";

jest.mock("../../../../utils/axios");
const mockAxios = jest.mocked(Axios, true);

describe("DeleteCommentById", () => {
  let dispatch: Dispatch;
  let getState: () => () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test("should be fulfilled", async () => {
    mockAxios.delete.mockResolvedValue({ status: 204 });
    const action = DeleteCommentById("commentID");
    const result = await action(dispatch, getState, {});

    expect(mockAxios.delete).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toEqual("commentID");
  })

  test("should be rejected", async () => {
    mockAxios.delete.mockRejectedValue({ status: 404 });
    const action = DeleteCommentById("commentID");
    const result = await action(dispatch, getState, {});

    expect(mockAxios.delete).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
    expect(result.payload).toEqual("comments-delete");
  })
})