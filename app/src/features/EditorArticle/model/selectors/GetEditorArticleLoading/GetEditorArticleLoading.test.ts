import {StateSchema} from "../../../../../app/providers/Store";
import {GetEditorArticleLoading} from "./GetEditorArticleLoading";

describe("GetEditorArticleLoading", () => {
  test("should be defined", () => {
    const state: StateSchema = {
      editorArticle: {
        loading: true,
        error: undefined,
        idArt: undefined,
        record: {},
        edit: undefined,
      }
    } as StateSchema;

    expect(GetEditorArticleLoading(state)).toBeTruthy();
  })
})