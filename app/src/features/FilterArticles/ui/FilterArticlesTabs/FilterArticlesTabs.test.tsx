import {StateSchema} from "../../../../app/providers/Store";
import ComponentRender from "../../../../shared/test/componentRender";
import {FilterArticlesTabs} from "./FilterArticlesTabs";
import {ArticleTypesAdditionName} from "../../../../shared/const/ArticleTypesTabs";
import {fireEvent} from "@testing-library/react";

describe("<FilterArticlesTabs/>", () => {
  const state: StateSchema = {
    filterArticles: {
      tab: ArticleTypesAdditionName.ALL,
    }
  } as StateSchema;

  test("should be defined", () => {
    const { getByText } = ComponentRender(<FilterArticlesTabs/>, { reloadedState: state });

    expect(getByText("All")).toBeInTheDocument();
    expect(getByText("It")).toBeInTheDocument();
    expect(getByText("Science")).toBeInTheDocument();
    expect(getByText("Economics")).toBeInTheDocument();
  })

  test("click to tab", () => {
    const { getByText } = ComponentRender(<FilterArticlesTabs/>, { reloadedState: state });
    const itTab = getByText("It");

    fireEvent.click(itTab)
    expect(itTab).toHaveClass("tab--active")
  })
})