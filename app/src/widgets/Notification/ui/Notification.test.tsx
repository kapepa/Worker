import {Notification} from "./Notification";
import {NotificationEnum} from "../../../shared/const/NotificationEnum";
import RenderWithTranslation from "../../../shared/test/renderWithTranslation";
import React from "react";

jest.mock("../../../shared/ui/PortalModal/PortalModal", () => (props: {children: React.ReactNode}) => {
  const { children } = props;
  return <div>{children}</div>
});

describe("<Notification/>", () => {
  test("attention", () => {
    const { getByText, debug } = RenderWithTranslation(<Notification
      isOpen={true}
      text={"Mock text"}
      onClose={() => {}}
      onConfirmed={() => {}}
      type={NotificationEnum.Attention}
    />)

    expect(getByText("Attention")).toBeInTheDocument();
    expect(getByText("Mock text")).toBeInTheDocument();
    expect(getByText("OK")).toBeInTheDocument();
    expect(getByText("Cancel")).toBeInTheDocument();
  })
})