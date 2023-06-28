import React from 'react';
import { render, screen } from '@testing-library/react';
import AppLink from "./AppLink";

test('renders learn react link', () => {
  render(<AppLink className={"sdas"} to={"/"} children={'link'}/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});