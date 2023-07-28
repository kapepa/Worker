import React from 'react';
import { screen } from '@testing-library/react';
import Error from "./Error";
import ComponentRender from "../../../shared/test/componentRender";

jest.mock("../../../widgets/Navbar", () => jest.fn(() => {
  return <div role="navbar"/>
}))

describe("<Error />", () => {
  test('renders ErrorPage', () => {
    ComponentRender(<Error />);
    const linkElement = screen.getByTestId("error");
    expect(linkElement).toBeInTheDocument();
  });
})