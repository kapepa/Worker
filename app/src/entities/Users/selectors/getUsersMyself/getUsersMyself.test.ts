import {UsersState} from "../../model/types/usersState";
import {GetUsersMyself} from "./getUsersMyself";
import {StateSchema} from "../../../../app/providers/Store";
import {DeepPartial} from "@reduxjs/toolkit";

describe("GetUsersMyself", () => {
  const mockUser: UsersState = { loading: false, data: {id: "1", username: "MockUser"} }
  test("should be return myself", () => {
    const mockState: DeepPartial<StateSchema> = {users: mockUser};
    expect(GetUsersMyself(mockState as StateSchema)).toEqual(mockUser.data);
  })
})