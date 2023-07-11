import {render, screen} from "@testing-library/react";
import XClose from "./XClose";
import React from "react";

describe("<XClose />", () => {

  test("should be render Modal", () => {
    render(<XClose color={"BG_COLOR"} cb={() => {}} />);
    const Element = screen.getByTestId("x-close");
    expect(Element).toBeInTheDocument();
  });

})