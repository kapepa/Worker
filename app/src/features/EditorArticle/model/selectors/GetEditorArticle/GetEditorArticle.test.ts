import {StateSchema} from "../../../../../app/providers/Store";
import {GetEditorArticle} from "./GetEditorArticle";

describe("GetEditorArticle", () => {
  test("should be defined", () => {
    const state: StateSchema = {
      editorArticle: {
        loading: false,
        error: undefined,
        idArt: undefined,
        record: {},
        edit: undefined,
      }
    } as StateSchema;

    expect(GetEditorArticle(state)).toEqual(state.editorArticle);
  })
})