import {SwitchView} from "./SwitchView";
import ComponentRender from "../../../shared/test/componentRender";

describe("<SwitchView/>", () => {
  test("should be defined", () => {
    const { getByTestId, getAllByTestId } = ComponentRender(<SwitchView/>);
    expect(getByTestId("switch-view")).toBeInTheDocument();
    expect(getAllByTestId("ico-img").length).toEqual(2)
  })
})