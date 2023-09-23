import {StateSchema} from "../../../../app/providers/Store";
import {GetFilterArticlesSearch} from "./getFilterArticlesSearch";

describe("GetFilterArticlesSearch", () => {
  test("should be return search", () => {
    const state: StateSchema = {
      filterArticles: {
        search: "",
      }
    } as StateSchema;

    expect(GetFilterArticlesSearch(state)).toEqual(state.filterArticles.search);
  });
})