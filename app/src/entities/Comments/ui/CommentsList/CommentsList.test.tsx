import {render} from '@testing-library/react'
import {CommentsList} from "./CommentsList";

describe("<CommentsList/>", () => {
  test("should be defined", () => {
    const { getByTestId } = render(<CommentsList/>)
    expect(getByTestId("comments-list")).toBeInTheDocument();
  })
})