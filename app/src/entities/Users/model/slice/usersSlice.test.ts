import {UsersReducer, UsersActions, UsersState} from "../../../Users";

describe("UsersReducer", () => {
  const state: UsersState = {
    loading: false,
    data: undefined,
    error: undefined,
  }
  const mockUser = {
    id: "MyId", email: "mock@email.com", username: "MyName",
  }

  test("default state", () => {
    expect(UsersReducer({...state, data: mockUser}, UsersActions.cleanUsers()))
      .toEqual(state);
  })
})