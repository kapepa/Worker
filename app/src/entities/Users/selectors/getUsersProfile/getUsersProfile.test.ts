import {UsersState} from "../../model/types/usersState";
import {GetUsersProfile} from "./getUsersProfile";
import {StateSchema} from "../../../../app/providers/Store";
import {DeepPartial} from "@reduxjs/toolkit";

describe("GetUsersMyself", () => {
  const mockUser: UsersState = { loading: false, profile: {id: "1", username: "MockUser"} }
  test("should be return myself", () => {
    const mockState: DeepPartial<StateSchema> = {users: mockUser};
    expect(GetUsersProfile(mockState as StateSchema)).toEqual(mockUser.profile);
  })
})