import {fireEvent, render, waitFor} from '@testing-library/react';
import {Drawer} from "./Drawer";


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
    const {getByText, findByText, queryByText, debug} = render(
      <Drawer
        innerBtn={<div>{open}</div>}
        children={<div>{children}</div>}
        direction="column"
        onOpen={mockOpen}
      />
    )

    const openBtn = getByText(open);
    fireEvent.click(openBtn);
    expect(mockOpen).toHaveBeenCalled();
  })
})