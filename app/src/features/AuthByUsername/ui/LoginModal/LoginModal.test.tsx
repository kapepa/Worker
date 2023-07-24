import {screen} from '@testing-library/react';
import ComponentRender from "../../../../shared/test/componentRender";
import {LoginModal} from "./LoginModal";


describe("<LoginModal/>", () => {
  test("should be to have modal", () => {
    ComponentRender(<LoginModal isOpen={true} onClose={() => {}}/>)
    expect(screen.getByTestId("login-modal")).toBeDefined();
  })
})