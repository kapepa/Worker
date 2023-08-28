import {ProfileRequest} from "./ProfileRequest";
import Axios from "../../../../utils/axios";
import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../app/providers/Store";
import {NavigateFunction} from "react-router/dist/lib/hooks";

jest.mock("../../../../utils/axios");
const mockAxios = jest.mocked(Axios, true);

describe("ProfileRequest", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;
  let navigate: NavigateFunction;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
    navigate = jest.fn();
  })

  test("should be fulfilled", async () => {
    const mockUser = { id: "MyID", email: "mock@email.com", username: "MyName"};
    mockAxios.get.mockResolvedValue({data: mockUser});
    const action = ProfileRequest("userID");
    const result = await action(dispatch, getState, {navigate});

    expect(mockAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toEqual(mockUser);
  })

  test("should be rejected", async () => {
    mockAxios.get.mockResolvedValue({status: 403});
    const action = ProfileRequest("userID");
    const result = await action(dispatch, getState, {navigate});

    expect(mockAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
    expect(result.payload).toEqual("error-profile");
  })
})