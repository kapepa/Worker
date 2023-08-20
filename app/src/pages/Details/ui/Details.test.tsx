import {Details} from "./Details";
import ComponentRender from "../../../shared/test/componentRender";

describe("<Details/>", () => {
  test("should be defined", () => {
    const { getByTestId } = ComponentRender(<Details/>);
    expect(getByTestId("details")).toBeInTheDocument();
  })
})