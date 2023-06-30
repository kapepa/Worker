import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from "./Home";

jest.mock("../../../widgets/Navbar", () => jest.fn(() => {
  return <div role="navbar"/>
}))

jest.mock("../../../widgets/Sidebar", () => jest.fn(() => {
  return <div role="sidebar"/>
}))

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (str: string): string => str })
}));

test('renders Home', () => {
  render(<Home />);
  const linkElement = screen.getByTestId("home");
  expect(linkElement).toBeInTheDocument();
});