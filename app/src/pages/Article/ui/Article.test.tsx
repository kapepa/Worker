import {render} from '@testing-library/react'
import {Article} from "./Article";

describe("<Article/>", () => {
  test("should be defined", () => {
    const { getByTestId } = render(<Article/>)
    expect(getByTestId("article")).toBeInTheDocument();
  })
})