import {render} from '@testing-library/react'
import {Tab} from "./Tab";

describe("<Tab/>", () => {
  test("should be defined", () => {
    const { getByText } = render(<Tab>Tab</Tab>)
    expect(getByText("Tab")).toBeInTheDocument();
  })
})