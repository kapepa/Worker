import React from 'react';
import { render, screen } from '@testing-library/react';
import Sidebar from "./Sidebar";

test('renders learn react link', () => {
  render(<Sidebar />);
  const linkElement = screen.getByTestId("sidebar");
  expect(linkElement).toBeInTheDocument();
});