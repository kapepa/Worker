import {fireEvent, screen} from '@testing-library/react';
import Navbar from "./Navbar";
import ComponentRender from "../../../shared/test/componentRender";
import {RouterPath} from "../../../shared/const/Routers";

describe("<Navbar />", () => {

  test('renders learn react link', () => {
    ComponentRender(<Navbar />);
    const linkElement = screen.getByTestId("navbar");
    expect(linkElement).toBeInTheDocument();
  });

  test('click on link', () => {
    ComponentRender(<Navbar />);
    const linkElements = screen.getAllByRole("link")[0];
    expect(linkElements).toHaveAttribute('href', RouterPath.HOME);
  });
})

