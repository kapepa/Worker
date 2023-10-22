import {StateSchema} from "../../../../../app/providers/Store";
import {GetEditorArticleError} from "./GetEditorArticleError";

describe("GetEditorArticleError", () => {
  test("should be defined", () => {
    const errorMock: string = "Error not found";

    const state: StateSchema = {
      editorArticle: {
        loading: false,
        error: errorMock,
        idArt: undefined,
        record: {},
        edit: undefined,
      }
    } as StateSchema;

    expect(GetEditorArticleError(state)).toEqual(errorMock);
  })
})