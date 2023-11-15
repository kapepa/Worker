import {fireEvent, render} from '@testing-library/react';
import {Drawer} from "./Drawer";
import RenderWithPortal from "../../../shared/test/renderWithPortal";
import React from "react";

jest.mock(
  "../../../shared/ui/PortalModal/PortalModal",
  () => (props: {children: React.ReactNode}) => {
    const { children } = props;
    return <div>{children}</div>
  })

describe("Drawer", () => {
  const open: string = "Open";
  const children: string = "Children";

  test("should be defined", () => {
    const {getByText} = render(
      <Drawer
        innerBtn={<div>{open}</div>}
        children={<div>{children}</div>}
        direction="column"
      />
    )

    expect(getByText(open)).toBeInTheDocument();
  });

  test("should be open", async () => {
    const mockOpen = jest.fn();
    const {getByText, findByText, debug} = RenderWithPortal(
      <Drawer
        innerBtn={<div>{open}</div>}
        children={<div>{children}</div>}
        direction="column"
        onOpen={mockOpen}
      />
    )

    const openBtn = getByText(open);
    fireEvent.click(openBtn);
    expect(await findByText(children)).toBeInTheDocument();
    expect(mockOpen).toHaveBeenCalled();
  })
})