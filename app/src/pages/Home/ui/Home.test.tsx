import React from 'react';
import { screen } from '@testing-library/react';
import Home from "./Home";
import RenderWithTranslation from "../../../shared/test/renderWithTranslation";
import ComponentRender from "../../../shared/test/componentRender";

jest.mock("../../../widgets/Navbar", () => jest.fn(() => {
  return <div role="navbar"/>
}))

describe("<Home />", () => {

  test('renders Home', () => {
    ComponentRender(<Home />);
    const linkElement = screen.getByTestId("home");
    expect(linkElement).toBeInTheDocument();
  });

})

