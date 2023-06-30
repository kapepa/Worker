import React from 'react';
import { render, screen } from '@testing-library/react';
import LangSwitcher from "./LangSwitcher";


jest.mock("../../../shared/ui/Button/Button", () => ({
  ...jest.requireActual("../../../shared/ui/Button/Button"),
  __esModule: true,
  default: jest.fn(({children, onClick}) => {
    return <button role="button" onClick={onClick}>{children}</button>
  })
}))

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string): string => str,
    i18n: { changeLanguage: jest.fn() }
  })
}));

test('renders LangSwitcher', async () => {
  const {getByRole} = render(<LangSwitcher />);

  // const linkElement = screen.getByRole("button");
  // expect(linkElement).toBeInTheDocument();
  // console.log(getByRole("button"))
});