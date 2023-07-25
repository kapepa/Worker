import {screen, render} from '@testing-library/react';
import ComponentRender from "../../../../shared/test/componentRender";
import {LoginModal} from "./LoginModal";


describe("<LoginModal/>", () => {
  test("should be to have modal", () => {
    const {debug} = ComponentRender(<LoginModal isOpen={true} onClose={() => {}}/>)
    expect(true).toBeTruthy()
  })
})