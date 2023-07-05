import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorPage from "./ErrorPage";

describe("<Button />", () => {

  test("should be render error", () => {
    render(<ErrorPage />);
    const linkElement = screen.getByTestId("error");
    expect(linkElement).toBeInTheDocument();
  });

})

