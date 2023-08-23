import {render} from '@testing-library/react'
import {ArticleBlockTextComponent} from "./ArticleBlockTextComponent";
import {ArticleBlockText, ArticleBlockType} from "../../model/types/articleBlock";

describe("ArticleBlockTextComponent", () => {
  const block: ArticleBlockText = { id: "blockID", title: "BlockTitle", type: ArticleBlockType.TEXT, paragraphs: ["Mock text"] }
  test("should be defined", () => {
    const { getByTestId } = render(<ArticleBlockTextComponent block={block}/>);
    expect(getByTestId("article-text")).toBeInTheDocument();
  })

})