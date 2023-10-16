import RenderWithForm from "../../../../shared/test/renderWithForm";
import {EditorBlocks} from "./EditorBlocks";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {StateSchema} from "../../../../app/providers/Store";
import {fireEvent} from "@testing-library/react";
import ArticleJSON from "../../../../shared/test/mock/article.json";
import {ArticleType} from "../../../../entities/Article/model/types/articleType";
import {ArticleBlockCode} from "../../../../entities/Article/model/types/articleBlock";

describe("<EditorBlocks/>", () => {
  const defaultMock: ArticleType = {...ArticleJSON.article, blocks: [ArticleJSON.code as ArticleBlockCode]} as ArticleType;
  const mockToggleBlocks = jest.fn();

  test("should be defined", () => {
    const { getByText } = RenderWithForm(
      <EditorBlocks
        label="Blocks"
        theme={BgEnum.BG_COLOR}
        onToggleBlocks={mockToggleBlocks}
      />,
      {defaultValues: {}, preloadedState: {} as StateSchema}
    );

    expect(getByText("Blocks")).toBeInTheDocument();
    expect(getByText("Code")).toBeInTheDocument();
    expect(getByText("Image")).toBeInTheDocument();
    expect(getByText("Text")).toBeInTheDocument();
  })

  test("should be click on block", () => {
    const { getByText } = RenderWithForm(
      <EditorBlocks
        label="Blocks"
        theme={BgEnum.BG_COLOR}
        onToggleBlocks={mockToggleBlocks}
      />,
      {defaultValues: {}, preloadedState: {} as StateSchema}
    );

    const blockCode = getByText("Code");

    fireEvent.click(blockCode);
    expect(mockToggleBlocks).toHaveBeenCalled();
  });
})