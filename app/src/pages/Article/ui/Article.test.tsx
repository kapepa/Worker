import {Article} from "./Article";
import ComponentRender from "../../../shared/test/componentRender";

describe("<Article/>", () => {
  test("should be defined", () => {
    const { getByTestId } = ComponentRender(<Article/>)
    expect(getByTestId("article")).toBeInTheDocument();
  })
})