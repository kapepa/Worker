import { render, screen } from '@testing-library/react';
import Navbar from "./Navbar";

jest.mock("../../../shared/ui/AppLink/AppLink", () => ({
  ...jest.requireActual("../../../shared/ui/AppLink/AppLink"),
  __esModule: true,
  default: jest.fn(({children, to, theme}) => {
    return <a href={to} role="link">{children}</a>
  })
}))

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("<Navbar />", () => {

  test('renders learn react link', () => {
    render(<Navbar />);
    const linkElement = screen.getByTestId("navbar");
    expect(linkElement).toBeInTheDocument();
  });

})

