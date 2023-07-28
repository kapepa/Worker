import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../../app/providers/Store";
import {GetAuth} from "./getAuth";
import {AuthState} from "../../types/AuthState";

describe("GetAuth", () => {
  const mockAuth: AuthState = { loading: false, error: undefined, token: "SomeToken", login: { username: "MyName", password: "123456"} }
  test("get value", () => {
    const state: DeepPartial<StateSchema> = { auth: mockAuth }
    expect(GetAuth(state as StateSchema)).toEqual(mockAuth);
  })
})