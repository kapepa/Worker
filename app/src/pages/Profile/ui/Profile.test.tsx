import {Profile} from "./Profile";
import { screen } from '@testing-library/react';
import ComponentRender from "../../../shared/test/componentRender";


describe("<Profile/>", () => {
  test("should be loaded", () => {
    ComponentRender(<Profile/>);
    const linkElement = screen.getByTestId("profile");
    expect(linkElement).toBeInTheDocument();
  })
})