import {fireEvent, render} from '@testing-library/react';
import {DropDown} from "./DropDown";
import {RouterPath} from "../../../shared/const/Routers";
import {DropDownInt} from "../../../shared/interface/DropDownInt";
import RenderWithRouter from "../../../shared/test/renderWithRouter";

describe("<DropDown/>", () => {
  const prefixMock: string = "Click to me";
  const navListMock: DropDownInt[] = [
    { label: "Profile", href: `${RouterPath.PROFILE}/idUser}` },
    { label: "Logout", callback: () => {} }
  ]

  test("should be defined", () => {
    const { getByText } = render(<DropDown navList={navListMock} viewPrefix={prefixMock} />);

    expect(getByText(prefixMock)).toBeInTheDocument();
  })

  test("should drop menu", () => {
    const { getByText } = RenderWithRouter(<DropDown navList={navListMock} viewPrefix={prefixMock} />);
    const btn = getByText(prefixMock);

    fireEvent.click(btn)
    expect(getByText(navListMock[0].label)).toBeInTheDocument();
    expect(getByText(navListMock[1].label)).toBeInTheDocument();
  })
})