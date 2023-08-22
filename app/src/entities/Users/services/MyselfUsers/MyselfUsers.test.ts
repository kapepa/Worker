import {MyselfUsers} from "./MyselfUsers";
import Axios from "../../../../utils/axios";
import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../app/providers/Store";

jest.mock("../../../../utils/axios")
const mockAxios = jest.mocked(Axios, true);

describe("MyselfUsers", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  })

  test("should be fulfilled", async () => {
    const mockUser = { id: "MyID", email: "mock@email.com", username: "MyName"};
    mockAxios.get.mockResolvedValue({data: mockUser});
    const action = MyselfUsers();
    const result = await action(dispatch, getState, undefined);

    expect(mockAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toEqual(mockUser);
  })

  test("should be rejected", async () => {
    mockAxios.get.mockResolvedValue({status: 403});
    const action = MyselfUsers();
    const result = await action(dispatch, getState, undefined);

    expect(mockAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
    expect(result.payload).toEqual("error-user");
  })
})