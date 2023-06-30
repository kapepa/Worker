import React from 'react';
import { render, screen } from '@testing-library/react';
import LangSwitcher from "./LangSwitcher";

test('renders learn react link', () => {
  render(<LangSwitcher />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});