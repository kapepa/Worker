import ComponentRender from "../../../../shared/test/componentRender";
import {FilterArticlesSelectors} from "./FilterArticlesSelectors";
import {StateSchema} from "../../../../app/providers/Store";
import {ArticleOrderSort} from "../../../../shared/const/ArticleOrderSort";
import {ArticleOrderField} from "../../../../shared/const/ArticleOrderField";

describe("<FilterArticlesSelectors/>", () => {
  test("should be defined", () => {
    const state: StateSchema = {
      filterArticles: {
        order: ArticleOrderSort.DESC,
        sort: ArticleOrderField.CREATED,
      }
    } as StateSchema;

    const { getByDisplayValue } = ComponentRender(<FilterArticlesSelectors/>, { reloadedState: state });

    expect(getByDisplayValue("Created")).toBeInTheDocument();
    expect(getByDisplayValue("Descending")).toBeInTheDocument();
  })
})