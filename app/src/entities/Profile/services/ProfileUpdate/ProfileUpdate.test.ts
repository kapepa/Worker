import {ProfileUpdate} from "./ProfileUpdate";
import Axios from "../../../../utils/axios";
import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../app/providers/Store";
import {NavigateFunction} from "react-router/dist/lib/hooks";
import UserJSON from "../../../../shared/test/mock/user.json"

jest.mock("../../../../utils/axios");

describe("ProfileUpdate", () => {
  const mockAxios = jest.mocked(Axios, true);
  const mockUser = { id: "MyID", email: "mock@email.com", username: "MyName"};

  let dispatch: Dispatch;
  let getState: () => StateSchema;
  let navigate: NavigateFunction;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn(() => { return {
      profile: { edit: UserJSON }
    } as StateSchema });
    navigate = jest.fn();
  })

  test("should be fulfilled", async () => {
    mockAxios.put.mockResolvedValue({data: mockUser});
    const action = ProfileUpdate();
    const result = await action(dispatch, getState, {navigate});

    expect(mockAxios.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toEqual(mockUser);
  })

  test("should be rejected", async () => {
    const mockUser = { id: "MyID", email: "mock@email.com", username: "MyName"};
    mockAxios.put.mockRejectedValue({status: 403});
    const action = ProfileUpdate();
    const result = await action(dispatch, getState, {navigate});

    expect(mockAxios.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
    expect(result.payload).toEqual("error-profile-update");
  })
})