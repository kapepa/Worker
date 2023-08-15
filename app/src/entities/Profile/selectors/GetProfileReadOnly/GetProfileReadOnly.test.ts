import {ProfileState} from "../../model/types/profileState";
import {GetProfileReadOnly} from "./GetProfileReadOnly";
import {StateSchema} from "../../../../app/providers/Store";

describe("GetProfileReadOnly", () => {
  test("should be return field readOnly", () => {
    const profile: ProfileState = {readonly: true} as ProfileState;
    expect(GetProfileReadOnly({profile} as StateSchema)).toBeTruthy();
  })
})