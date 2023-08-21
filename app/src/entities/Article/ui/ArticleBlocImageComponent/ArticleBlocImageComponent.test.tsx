import {render, screen} from '@testing-library/react';
import {ArticleBlocImageComponent} from "./ArticleBlocImageComponent";

describe("ArticleBlocImageComponent", () => {
  test("should be defined", () => {
    const { getByTestId } = render(<ArticleBlocImageComponent/>);
    expect(getByTestId("article-image")).toBeInTheDocument();
  })
})