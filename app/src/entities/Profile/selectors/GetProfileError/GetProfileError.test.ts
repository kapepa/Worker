import {GetProfileError} from "./GetProfileError";
import {StateSchema} from "../../../../app/providers/Store";

describe("GetProfileError", () => {
  test("should be get profile error", () => {
    const mockErrorStr: string = "Mock Error";
    const state: StateSchema = {profile: {loading: false, data: undefined, error: mockErrorStr}} as StateSchema
    expect(GetProfileError(state)).toEqual(mockErrorStr);
  })
})