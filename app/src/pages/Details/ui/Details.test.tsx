import {render, screen} from '@testing-library/react'
import {Details} from "./Details";

describe("<Details/>", () => {
  test("should be defined", () => {
    const { getByTestId } = render(<Details/>);
    expect(getByTestId("details")).toBeInTheDocument();
  })
})