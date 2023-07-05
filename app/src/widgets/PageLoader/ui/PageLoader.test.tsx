import {render, screen} from "@testing-library/react";
import PageLoader from "./PageLoader";
import React from "react";

describe("<PageLoader />", () => {

  test("should be render page loader", () => {
    render(<PageLoader />);
    const linkElement = screen.getByTestId("page-loader");
    expect(linkElement).toBeInTheDocument();
  });

})