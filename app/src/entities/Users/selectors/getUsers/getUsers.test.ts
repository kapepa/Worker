import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../app/providers/Store";
import {UsersState} from "../../model/types/usersState";
import {GetUsers} from "./getUsers";

describe("getUsers", () => {
  const mockUser: UsersState = { loading: false, data: {id: "1", username: "MockUser"} }
  test("should be return full user", () => {
    const state: DeepPartial<StateSchema> = { users: mockUser };
    expect(GetUsers(state as StateSchema)).toEqual(mockUser);
  })
})