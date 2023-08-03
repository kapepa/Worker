import {LoginByUser} from "./loginByUser";
import Axios from "../../../../../utils/axios";
import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../../app/providers/Store";

jest.mock("../../../../../utils/axios");
const mockAxios = jest.mocked(Axios, true);

describe("LoginByUser", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  })

  test("should be success resolve", async () => {
    const mockResponse = {access_token: "BearerToken"};
    mockAxios.post.mockReturnValue(Promise.resolve({data: mockResponse}));
    const action = LoginByUser({email: "MeEmail", password: "123456"});
    const result = await action(dispatch, getState, undefined);

    expect(mockAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toEqual(mockResponse)
  })

  test("should be reject", async () => {
    mockAxios.post.mockRejectedValue({status: 403});
    const action = LoginByUser({email: "MeEmail", password: "123456"});
    const result = await action(dispatch, getState, undefined);

    expect(mockAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
    expect(result.payload).toEqual("error-login")
  })
})