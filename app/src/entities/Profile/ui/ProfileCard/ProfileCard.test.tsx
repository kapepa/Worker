import {ProfileCard} from "./ProfileCard";
import ComponentRender from "../../../../shared/test/componentRender";
import {ProfileTypes} from "../../model/types/profileTypes";

describe("<ProfileCard/>", () => {
  const mockProfile: ProfileTypes = {firstname: "MyFirstname", lastname: "MyLastname", username: "MyUsername"};

  test("should be to defined ProfileCard", () => {
    const { getByTestId, getByDisplayValue,  debug } = ComponentRender(<ProfileCard
      profile={mockProfile}
      edit={mockProfile}
      isLoading={false}
      error={undefined}
      readonly={false}
      refSend={{ current: null }}
    />);
    expect(getByTestId("profile-card")).toBeInTheDocument()
    expect(getByDisplayValue("MyFirstname")).toBeInTheDocument();
    expect(getByDisplayValue("MyLastname")).toBeInTheDocument();
    expect(getByDisplayValue("MyUsername")).toBeInTheDocument();
  })

})