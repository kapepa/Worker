import {AsyncThunkAction, Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../../app/providers/Store";
import {FetchNotices} from "./FetchNotices";
import {NoticeTypes} from "../../types/notice.types";
import Axios from "../../../../../utils/axios";
import NoticesJSON from "../../../../../shared/test/mock/notice.json";

jest.mock('axios');

describe("FetchNotices", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn(() => ({} as StateSchema));
  })

  test("fulfilled", async () => {
    let data = [NoticesJSON]
    let mockGet = jest.spyOn(Axios, "get").mockResolvedValue({ data });
    let action: AsyncThunkAction<NoticeTypes[], undefined, { rejectValue: string, state: StateSchema }> = FetchNotices();
    let result = await action(dispatch, getState, {});


    expect(mockGet).toBeCalledWith("/api/notice/all")
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toEqual(data);
  });

  test("rejected", async () => {
    let error = {status: 403};
    let mockGet = jest.spyOn(Axios, "get").mockRejectedValue(error);
    let action: AsyncThunkAction<NoticeTypes[], undefined, { rejectValue: string, state: StateSchema }> = FetchNotices();
    let result = await action(dispatch, getState, {});

    expect(mockGet).toBeCalledWith("/api/notice/all");
    expect(result.meta.requestStatus).toEqual("rejected");
  })
})