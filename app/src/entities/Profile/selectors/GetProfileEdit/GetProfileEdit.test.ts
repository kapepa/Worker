import {ProfileState} from "../../model/types/profileState";
import {Countries} from "../../../../shared/const/Countries";
import {GetProfileEdit} from "./GetProfileEdit";
import {StateSchema} from "../../../../app/providers/Store";

describe("GetProfileEdit", () => {
  test("should to get edit fields of user", () => {
    const profile: ProfileState = {edit: {firstname: "MyFirstname", lastname: "MyLastname", username: "MyUsername", country: Countries.BLR}} as ProfileState;
    expect(GetProfileEdit({profile} as StateSchema)).toEqual(profile.edit);
  })
})