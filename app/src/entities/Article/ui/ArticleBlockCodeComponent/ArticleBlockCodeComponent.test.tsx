import {render} from '@testing-library/react'
import {ArticleBlockCodeComponent} from "./ArticleBlockCodeComponent";
import {ArticleBlockCode, ArticleBlockType} from "../../model/types/articleBlock";

describe("ArticleBlockCodeComponent", () => {
  const block: ArticleBlockCode = {id: "blockID", type: ArticleBlockType.CODE, code: "<p>Mock</p>"}
  test("should be defined", () => {
    const { getByTestId } = render(<ArticleBlockCodeComponent block={block}/>);
    expect(getByTestId("article-code")).toBeInTheDocument();
  })
})