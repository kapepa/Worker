import {render} from '@testing-library/react';
import {ArticleBlocImageComponent} from "./ArticleBlocImageComponent";
import {ArticleBlocImage, ArticleBlockType} from "../../model/types/articleBlock";

describe("ArticleBlocImageComponent", () => {
  const block: ArticleBlocImage = {id: "blockID", src: "mock.png", title: "BlockTitle", type: ArticleBlockType.IMAGE};

  test("should be defined", () => {
    const { getByTestId } = render(<ArticleBlocImageComponent block={block}/>);
    expect(getByTestId("article-image")).toBeInTheDocument();
  })
})