import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../app/providers/Store";
import {UsersState} from "../../model/types/usersState";
import {GetUsers} from "./getUsers";
import {Role} from "../../model/enum/roleEnum";

describe("getUsers", () => {
  const mockUser: UsersState = {
    loading: false,
    profile: {id: "1", username: "MockUser"},
    roles: { [Role.ADMIN]: false, [Role.MANAGER]: false, [Role.USER]: true},
  }
  test("should be return full user", () => {
    const state: DeepPartial<StateSchema> = { users: mockUser };
    expect(GetUsers(state as StateSchema)).toEqual(mockUser);
  })
})