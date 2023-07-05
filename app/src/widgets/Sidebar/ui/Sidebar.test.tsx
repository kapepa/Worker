import React from 'react';
import {fireEvent, screen} from '@testing-library/react';
import Sidebar from "./Sidebar";
import RenderWithTranslation from "../../../shared/test/renderWithTranslation";

describe("<Sidebar />", () => {
  test('renders learn react link', () => {
    RenderWithTranslation(<Sidebar />);
    const linkElement = screen.getByTestId("sidebar");
    expect(linkElement).toBeInTheDocument();
  });

  test("should be open sidebar", () => {
    RenderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByRole("toggle");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("sidebar--open");
  })
})