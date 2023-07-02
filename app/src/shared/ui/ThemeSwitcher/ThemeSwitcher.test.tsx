import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeSwitcher from "./ThemeSwitcher";

describe("<ThemeSwitcher />", () => {

  test('renders learn react link', () => {
    render(<ThemeSwitcher />);
    const linkElement = screen.getByAltText(/Theme/i);
    expect(linkElement).toBeInTheDocument();
  });

})