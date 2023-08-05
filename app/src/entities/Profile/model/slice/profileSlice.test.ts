import {ProfileActions, ProfileReducer} from "./profileSlice";
import {ProfileTypes} from "../types/profileTypes";
import {ProfileState} from "../types/profileState";

describe("ProfileSlice", () => {
  const mockState: ProfileState = { loading: false, data: undefined, error: undefined };
  test("cleanUsers", () => {
    const mockProfile: ProfileTypes = {id: "MyID", email: "mock@mail.com"};
    expect(ProfileReducer({...mockState, data: mockProfile}, ProfileActions.cleanUsers())).toEqual(mockState);
  })
})