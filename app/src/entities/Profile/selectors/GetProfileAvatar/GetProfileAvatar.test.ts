import {GetProfileAvatar} from "./GetProfileAvatar";
import {ProfileState} from "../../model/types/profileState";
import {StateSchema} from "../../../../app/providers/Store";

describe("GetProfileAvatar", () => {
  test("should be get avatar",() => {
    const avatar = "myAvatar.jpg";
    const profile: ProfileState = {data: {avatar}} as ProfileState;
    expect(GetProfileAvatar({profile} as StateSchema)).toEqual(avatar);
  })
})