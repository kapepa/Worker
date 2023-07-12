import {render, screen} from "@testing-library/react";
import Modal from "./Modal";
import React from "react";


jest.mock("../PortalModal/PortalModal", () => (props: {children: React.ReactNode}) => {
  const { children } = props;
  return <div>{children}</div>
})

describe("<Modal />", () => {

  test("should be render Modal", () => {
    render(<Modal isOpen={true} onClose={() => {}}><div role="content"/></Modal>);
    const contentElement = screen.getByRole("content");
    const modalElement = screen.getByTestId("modal");
    expect(contentElement).toBeInTheDocument();
    expect(modalElement).toBeInTheDocument();
  });

})