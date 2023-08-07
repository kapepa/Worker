import {LoginByUser} from "./loginByUser";
import Axios from "../../../../../utils/axios";
import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../../app/providers/Store";
import {useNavigate} from "react-router-dom";
import {NavigateFunction} from "react-router/dist/lib/hooks";

jest.mock("../../../../../utils/axios");
const mockAxios = jest.mocked(Axios, true);

describe("LoginByUser", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;
  let navigate: NavigateFunction;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
    navigate = jest.fn();
  })

  test("should be success resolve", async () => {
    const mockResponse = {access_token: "BearerToken"};
    mockAxios.post.mockReturnValue(Promise.resolve({data: mockResponse}));
    const action = LoginByUser({email: "MeEmail", password: "123456"});
    const result = await action(dispatch, getState, {navigate});

    expect(mockAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toEqual(mockResponse)
  })

  test("should be reject", async () => {
    mockAxios.post.mockRejectedValue({status: 403});
    const action = LoginByUser({email: "MeEmail", password: "123456"});
    const result = await action(dispatch, getState, {navigate});

    expect(mockAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
    expect(result.payload).toEqual("error-login")
  })
})