import {ProfileCard} from "./ProfileCard";
import ComponentRender from "../../../../shared/test/componentRender";
import {ProfileTypes} from "../../model/types/profileTypes";
import {fireEvent} from "@testing-library/react";

describe("<ProfileCard/>", () => {
  const mockProfile: ProfileTypes = {firstname: "MyFirstname", lastname: "MyLastname", username: "MyUsername"};

  test("should be to defined ProfileCard", async () => {
    const { getByTestId, getByDisplayValue, } = ComponentRender(<ProfileCard
      edit={mockProfile}
      readonly={false}
      refSend={{ current: null }}
    />);

    expect(getByTestId("profile-card")).toBeInTheDocument()
    expect(getByDisplayValue("MyFirstname")).toBeInTheDocument();
    expect(getByDisplayValue("MyLastname")).toBeInTheDocument();
    expect(getByDisplayValue("MyUsername")).toBeInTheDocument();
  })

  test("should be error validate", async () => {
    const { getByDisplayValue } = ComponentRender(<ProfileCard
      edit={mockProfile}
      readonly={false}
      refSend={{ current: null }}
    />);

    const input = getByDisplayValue("MyFirstname");
    fireEvent.click(input, {target: { value: "" }})
    fireEvent.focusOut(input)

  })
})