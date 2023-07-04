import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorPage from "./ErrorPage";

test("<Button />", () => {
  render(<ErrorPage />);
  const linkElement = screen.getByTestId("error");
  expect(linkElement).toBeInTheDocument();
});