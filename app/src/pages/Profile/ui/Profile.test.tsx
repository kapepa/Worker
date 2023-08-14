import {Profile} from "./Profile";
import { screen } from '@testing-library/react';
import ComponentRender from "../../../shared/test/componentRender";
import {ProfileTypes} from "../../../entities/Profile";
import {Countries} from "../../../shared/const/Countries";

describe("<Profile/>", () => {
  let mockUser: ProfileTypes;

  beforeEach(() => {
    mockUser = {firstname: "MyFirstname", lastname: "MyLastname", username: "MyUsername", country: Countries.BLR, city: "Odessa"}
  })

  test("should be loaded", () => {
    ComponentRender(<Profile/>, {reloadedState: {profile: { data: mockUser, edit: mockUser }}});
    const linkElement = screen.getByTestId("profile");
    expect(linkElement).toBeInTheDocument();
  })
})