import {render, screen} from '@testing-library/react'
import {ArticleBlockTextComponent} from "./ArticleBlockTextComponent";

describe("ArticleBlockTextComponent", () => {

  test("should be defined", () => {
    const { getByTestId } = render(<ArticleBlockTextComponent/>);
    expect(getByTestId("article-text")).toBeInTheDocument();
  })

})