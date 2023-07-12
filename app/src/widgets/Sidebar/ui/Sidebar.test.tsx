import {fireEvent, screen, render} from '@testing-library/react';
import Sidebar from "./Sidebar";
import RenderWithTranslation from "../../../shared/test/renderWithTranslation";

jest.mock("../../Navbar", () => jest.fn(() => <div data-testid="navbar">Navbar</div>));

jest.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

jest.mock("../../../app/contexts/Side", () => {
  let open = true;
  let toggleSide = () => !open;

  return { UseSide: () => { return {open, toggleSide} }  }
})

describe("<Sidebar />", () => {
  test('renders learn react link', () => {
    render(<Sidebar />);
    const linkElement = screen.getByTestId("sidebar");
    expect(linkElement).toBeInTheDocument();
  });

  test("should be open sidebar", () => {
    render(<Sidebar />);
    const toggleBtn = screen.getByRole("toggle");
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("sidebar--open");
  })
})