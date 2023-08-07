import {GetProfileLoading} from "./GetProfileLoading";
import {StateSchema} from "../../../../app/providers/Store";

describe("GetProfileLoading", () => {
  test("should be get state profile loading" ,() => {
    const state: StateSchema = {profile: {loading: true, data: undefined, error: undefined}} as StateSchema;
    expect(GetProfileLoading(state)).toBeTruthy();
  })
})