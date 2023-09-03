import {StateSchema} from "../../../../app/providers/Store";
import {GetFormCommentText} from "./getFormCommentText";

describe("getFormCommentText", () => {
  test("should be text", () => {
    const mockText = "some text"
    const state: StateSchema = { formComment: { loading: false, error: undefined, text: mockText } } as StateSchema;

    expect(GetFormCommentText(state)).toEqual(mockText);
  })
})