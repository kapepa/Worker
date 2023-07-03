import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from "./Button";

test("<Button />", () => {
  render(<Button />);
  const linkElement = screen.getByTestId("button");
  expect(linkElement).toBeInTheDocument();
});