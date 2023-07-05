import React from 'react';
import { screen } from '@testing-library/react';
import About from "./About";
import RenderWithTranslation from "../../../shared/test/renderWithTranslation";

jest.mock("../../../widgets/Navbar", () => jest.fn(() => {
  return <div role="navbar"/>
}))

describe("<About />", () => {

  test('renders About', () => {
    RenderWithTranslation(<About />);
    const linkElement = screen.getByTestId('about');
    expect(linkElement).toBeInTheDocument();
  });

})

