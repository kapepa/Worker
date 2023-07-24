import {fireEvent, screen} from '@testing-library/react';
import {Counter} from "./Counter";
import ComponentRender from "../../../shared/test/componentRender";
import userEvent from "@testing-library/user-event";

describe("<Counter/>", () => {
  test("should be to have defined value", () => {
    ComponentRender(<Counter/>, {
      reloadedState: {counter: {value: 10}}
    })

    expect(screen.getByTestId("counter-value")).toHaveTextContent("10");
  })

  test("Decrease", () => {
    ComponentRender(<Counter/>, {
      reloadedState: {counter: {value: 10}}
    })
    userEvent.click(screen.getByTestId("counter-decrease"));
    expect(screen.getByTestId("counter-value")).toHaveTextContent("9");
  })

  test("Increase", () => {
    ComponentRender(<Counter/>, {
      reloadedState: {counter: {value: 10}}
    })
    userEvent.click(screen.getByTestId("counter-increase"));
    expect(screen.getByTestId("counter-value")).toHaveTextContent("11");
  })
})