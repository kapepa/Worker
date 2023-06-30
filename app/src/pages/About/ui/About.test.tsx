import React from 'react';
import { render, screen } from '@testing-library/react';
import About from "./About";

jest.mock("../../../widgets/Navbar", () => jest.fn(() => {
  return <div role="navbar"/>
}))

jest.mock("../../../widgets/Sidebar", () => jest.fn(() => {
  return <div role="sidebar"/>
}))

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (str: string): string => str })
}));

test('renders About', () => {
  render(<About />);
  const linkElement = screen.getByRole('about');
  expect(linkElement).toBeInTheDocument();
});