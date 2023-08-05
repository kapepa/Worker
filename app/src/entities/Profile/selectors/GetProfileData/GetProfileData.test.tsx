import {GetProfileData} from "./GetProfileData";
import {ProfileState} from "../../model/types/profileState";
import {StateSchema} from "../../../../app/providers/Store";
import {ProfileTypes} from "../../model/types/profileTypes";

describe("GetProfileData", () => {
  const mockProfile: ProfileState = {loading: false, error: undefined, data: undefined}

  test("should be get profile", () => {
    const mockDate: ProfileTypes = {id: "MyID", email: "my@email.com"};
    expect(GetProfileData({profile: {...mockProfile, data: mockDate}} as StateSchema)).toEqual(mockDate);
  })
})