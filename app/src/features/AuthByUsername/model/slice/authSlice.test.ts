import {AuthActions, AuthReducer} from "./authSlice";
import {AuthState} from "../types/AuthState";

describe("AuthSlice", () => {
  const state: AuthState = {
    loading: false,
    login: {
      email: "",
      username: "",
      password: "",
    },
    token: undefined,
    error: undefined,
  }

  test("should be set email", () => {
    const mockEmail = "my@email.com";
    expect(AuthReducer(state, AuthActions.setEmail(mockEmail)))
      .toEqual({...state, login: {...state.login, email: mockEmail}});
  })

  test("should be set username", () => {
    const mockName = "MyName";
    expect(AuthReducer(state, AuthActions.setUsername(mockName)))
      .toEqual({...state, login: {...state.login, username: mockName}});
  })

  test("should be set password", () => {
    const mockPassword = "123456";
    expect(AuthReducer(state, AuthActions.setPassword(mockPassword)))
      .toEqual({...state, login: {...state.login, password: mockPassword}});
  })
})