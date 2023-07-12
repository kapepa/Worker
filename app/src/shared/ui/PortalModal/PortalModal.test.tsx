import {render, screen} from "@testing-library/react";
import PortalModal from "./PortalModal";
import Loader from "../Loader/Loader";
import React from "react";

const wrapperRender = ({children}: any) => {
  return render(
    <div>
      {children}
      <div id="modals-container" data-testid="modals-container" />
    </div>
  );
}

describe("<PortalModal />", () => {

  test("should be render loader", () => {
    wrapperRender(<PortalModal><div  data-testid="modal" >PortalModal</div></PortalModal>);
    const PortalElement = screen.getByTestId("modals-container");
    expect(PortalElement).toBeInTheDocument();
  });

})