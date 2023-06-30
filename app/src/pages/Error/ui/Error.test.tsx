import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from "./Error";

jest.mock("../../../widgets/Navbar", () => jest.fn(() => {
  return <div role="navbar"/>
}))

jest.mock("../../../widgets/Sidebar", () => jest.fn(() => {
  return <div role="sidebar"/>
}))

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (str: string): string => str })
}));

test('renders Error', () => {
  render(<Error />);
  const linkElement = screen.getByTestId("error");
  expect(linkElement).toBeInTheDocument();
});