import {render, screen} from '@testing-library/react'
import {ArticleBlockCodeComponent} from "./ArticleBlockCodeComponent";

describe("ArticleBlockCodeComponent", () => {
  test("should be defined", () => {
    const { getByTestId } = render(<ArticleBlockCodeComponent/>);
    expect(getByTestId("article-code")).toBeInTheDocument();
  })
})