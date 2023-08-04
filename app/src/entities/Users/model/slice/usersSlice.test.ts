import {UsersReducer, UsersActions, UsersState} from "../../../Users";

describe("UsersReducer", () => {
  const state: UsersState = {
    loading: false,
    profile: undefined,
    error: undefined,
  }
  const mockUser = {
    id: "MyId", email: "mock@email.com", username: "MyName",
  }

  test("default state", () => {
    expect(UsersReducer({...state, profile: mockUser}, UsersActions.cleanUsers()))
      .toEqual(state);
  })
})