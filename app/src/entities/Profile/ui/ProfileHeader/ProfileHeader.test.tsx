import {fireEvent, render, screen} from '@testing-library/react'
import {ProfileHeader} from "./ProfileHeader";
import ComponentRender from "../../../../shared/test/componentRender";

describe("<ProfileHeader/>", () => {
  test("should be to have defined", () => {
    const { getByTestId, getByText } = ComponentRender(<ProfileHeader/>)

    expect(getByTestId("profile-header")).toBeInTheDocument();
    expect(getByText(/Profile page/i));
    expect(getByText(/Edit/i));
  })

  test("should be to click on edit", () => {
    const { getByText, debug } = ComponentRender(<ProfileHeader/>)

    fireEvent.click(getByText(/Edit/i));
    expect(getByText(/Cancel/i));
    expect(getByText(/Send/i))
  })
})