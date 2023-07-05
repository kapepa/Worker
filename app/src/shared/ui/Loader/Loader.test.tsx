import {render, screen} from "@testing-library/react";
import Loader from "./Loader";
import React from "react";

describe("<Loader />", () => {

  test("should be render loader", () => {
    render(<Loader />);
    const linkElement = screen.getByTestId("loader");
    expect(linkElement).toBeInTheDocument();
  });

})
