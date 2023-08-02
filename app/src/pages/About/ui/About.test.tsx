import React from 'react';
import { screen } from '@testing-library/react';
import { About } from "./About";
import ComponentRender from "../../../shared/test/componentRender";

jest.mock("../../../widgets/Navbar", () => jest.fn(() => {
  return <div role="navbar"/>
}))

describe("<About />", () => {
  test('renders About', () => {
    ComponentRender(<About />);
    const linkElement = screen.getByTestId('about');
    expect(linkElement).toBeInTheDocument();
  });
})

