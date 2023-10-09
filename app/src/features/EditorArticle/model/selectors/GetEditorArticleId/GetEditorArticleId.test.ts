import {StateSchema} from "../../../../../app/providers/Store";
import {GetEditorArticleId} from "./GetEditorArticleId";

describe("GetEditorArticleId", () => {
  test("should be defined", () => {
    const mockID: string = "ID";

    const state: StateSchema = {
      editorArticle: {
        loading: false,
        error: undefined,
        idArt: mockID,
        record: {},
        edit: undefined,
      }
    } as StateSchema;

    expect(GetEditorArticleId(state)).toEqual(mockID);
  })
})