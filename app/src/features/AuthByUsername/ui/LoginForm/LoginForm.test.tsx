import {screen} from '@testing-library/react';
import ComponentRender from "../../../../shared/test/componentRender";
import {LoginForm} from "./LoginForm";

describe("<LoginModal/>", () => {
  test("should be to have modal", () => {
    ComponentRender(<LoginForm/>)
    expect(screen.getByTestId("login-form")).toBeDefined();
  })
})