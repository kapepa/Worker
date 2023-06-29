import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeSwitcher from "./ThemeSwitcher";

test('renders learn react link', () => {
  render(<ThemeSwitcher />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});