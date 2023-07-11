import {render, screen} from "@testing-library/react";
import Modal from "./Modal";
import React from "react";

describe("<Modal />", () => {

  test("should be render Modal", () => {
    render(<Modal isOpen={true} onClose={() => {}}><div role="content"/></Modal>);
    const linkElement = screen.getByTestId("modal");
    expect(linkElement).toBeInTheDocument();
  });

})