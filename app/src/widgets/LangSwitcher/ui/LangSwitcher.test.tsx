import React from 'react';
import { render, screen } from '@testing-library/react';
import LangSwitcher from "./LangSwitcher";

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string): string => str,
    i18n: { changeLanguage: jest.fn() }
  })
}));

describe("<LangSwitcher />",() => {
  test('renders LangSwitcher', () => {
    render(<LangSwitcher />);
    expect(screen).toBeDefined();
  });
})