import {AuthState} from "../../types/AuthState";
import {GetLogin} from "./getLogin";
import {StateSchema} from "../../../../../app/providers/Store";
import {DeepPartial} from "@reduxjs/toolkit";

describe("GetLogin", () => {
  const mockAuth: AuthState = { loading: false, error: undefined, token: "SomeToken", login: { username: "MyName", password: "123456"} }
  test("get login value", () => {
    const state: DeepPartial<StateSchema> = { auth: mockAuth }
    expect(GetLogin(state as StateSchema)).toEqual(mockAuth.login);
  })
})