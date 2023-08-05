import {GetProfile} from "./GetProfile";
import {ProfileState} from "../../model/types/profileState";
import {StateSchema} from "../../../../app/providers/Store";

describe("GetProfile", () => {
  const mockProfile: ProfileState = {loading: false, error: undefined, data: undefined}

  test("should be get profile", () => {
    expect(GetProfile({profile: mockProfile} as StateSchema)).toEqual(mockProfile);
  })
})