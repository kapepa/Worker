import {render} from '@testing-library/react'
import {FormComment} from "./FormComment";

describe("<FormComment/>", () => {
  test("should be defined", () => {
    const { getByTestId } = render(<FormComment/>)
    expect(getByTestId("form-comment")).toBeInTheDocument();
  })
})