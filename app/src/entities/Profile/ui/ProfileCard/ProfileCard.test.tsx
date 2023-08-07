import {ProfileCard} from "./ProfileCard";
import ComponentRender from "../../../../shared/test/componentRender";

describe("<ProfileCard/>", () => {
  test("should be defined module", () => {
    const { getByTestId } = ComponentRender(<ProfileCard/>);
    expect(getByTestId("profile-card")).toBeDefined();
  })
})