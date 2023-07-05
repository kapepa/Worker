import React from 'react';
import { screen } from '@testing-library/react';
import Home from "./Home";
import RenderWithTranslation from "../../../shared/test/renderWithTranslation";

jest.mock("../../../widgets/Navbar", () => jest.fn(() => {
  return <div role="navbar"/>
}))

describe("<Home />", () => {

  test('renders Home', () => {
    RenderWithTranslation(<Home />);
    const linkElement = screen.getByTestId("home");
    expect(linkElement).toBeInTheDocument();
  });

})

