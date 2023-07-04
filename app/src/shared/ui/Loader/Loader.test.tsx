import {render, screen} from "@testing-library/react";
import Loader from "./Loader";
import React from "react";

test("<Loader />", () => {
  render(<Loader />);
  const linkElement = screen.getByTestId("loader");
  expect(linkElement).toBeInTheDocument();
});