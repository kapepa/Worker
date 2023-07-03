import {render, screen} from "@testing-library/react";
import PageLoader from "./PageLoader";
import React from "react";

test("<PageLoader />", () => {
  render(<PageLoader />);
  const linkElement = screen.getByTestId("page-loader");
  expect(linkElement).toBeInTheDocument();
});