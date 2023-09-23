import ComponentRender from "../../../../shared/test/componentRender";
import {FilterArticlesSearch} from "./FilterArticlesSearch";
import {StateSchema} from "../../../../app/providers/Store";

describe("<FilterArticlesSearch/>", () => {
  test("should be defined", () => {
    const mockSearch: string = "Title";
    const state: StateSchema = {
      articles: {
        hasMore: true,
      },
      filterArticles: {
        search: mockSearch,
      }
    } as StateSchema;
    const { getByDisplayValue } = ComponentRender(<FilterArticlesSearch />, {reloadedState: state});
    expect(getByDisplayValue(mockSearch)).toBeInTheDocument();
  })
})