import React from 'react';
import { screen } from '@testing-library/react';
import Error from "./Error";
import RenderWithTranslation from "../../../shared/test/renderWithTranslation";

jest.mock("../../../widgets/Navbar", () => jest.fn(() => {
  return <div role="navbar"/>
}))

describe("<Error />", () => {

  test('renders ErrorPage', () => {
    RenderWithTranslation(<Error />);
    const linkElement = screen.getByTestId("error");
    expect(linkElement).toBeInTheDocument();
  });

})