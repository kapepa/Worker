import {UsersReducer, UsersActions, UsersState, MyselfUsers} from "../../../Users";
import {DeepPartial} from "@reduxjs/toolkit";

describe("UsersReducer", () => {
  const state: UsersState = {loading: false, profile: undefined, error: undefined}
  const mockUser = {id: "MyId", email: "mock@email.com", username: "MyName"}

  test("cleanUsers", () => {
    expect(UsersReducer({...state, profile: mockUser}, UsersActions.cleanUsers()))
      .toEqual(state);
  })

  test("MyselfUsers pending", () => {
    const statUser: DeepPartial<UsersState> = {loading: false};
    expect(UsersReducer(statUser, { type: MyselfUsers.pending }))
      .toEqual({loading: true})
  })

  test("MyselfUsers fulfilled", () => {
    const statUser: DeepPartial<UsersState> = state;

    expect(UsersReducer(statUser, { type: MyselfUsers.fulfilled, payload: mockUser }))
      .toEqual({...statUser, profile: mockUser})
  })
})