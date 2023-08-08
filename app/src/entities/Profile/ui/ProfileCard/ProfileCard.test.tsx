import {ProfileCard} from "./ProfileCard";
import ComponentRender from "../../../../shared/test/componentRender";
import {ProfileTypes} from "../../model/types/profileTypes";

describe("<ProfileCard/>", () => {
  const mockProfile: ProfileTypes = {firstname: "MyFirstname", lastname: "MyLastname"}
  test("should be defined module", () => {
    const { getByTestId } = ComponentRender(<ProfileCard profile={mockProfile} edit={mockProfile} isLoading={false} error={undefined} readonly={false} />);
    expect(getByTestId("profile-card")).toBeDefined();
  })
})