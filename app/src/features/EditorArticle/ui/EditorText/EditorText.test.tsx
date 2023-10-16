import {ArticleType} from "../../../../entities/Article/model/types/articleType";
import ArticleJSON from "../../../../shared/test/mock/article.json";
import {ArticleBlockText} from "../../../../entities/Article/model/types/articleBlock";
import RenderWithForm from "../../../../shared/test/renderWithForm";
import {EditorText} from "./EditorText";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {EditorCode} from "../EditorCode/EditorCode";
import {fireEvent} from "@testing-library/react";

describe("<EditorText/>", () => {
  const textParagraphs = ArticleJSON.text.paragraphs[0]
  const defaultMock: ArticleType = {...ArticleJSON.article, blocks: [{...ArticleJSON.text, paragraphs: [textParagraphs]} as ArticleBlockText]} as ArticleType;
  const onRemove = jest.fn();
  const setBlocksValue = jest.fn();

  test("should be defined", () => {
    const {getByText} = RenderWithForm(
      <EditorText
        index={0}
        theme={BgEnum.BG_COLOR}
        onRemove={onRemove}
        setBlocksValue={setBlocksValue}
      />,
      {defaultValues: defaultMock as any}
    );

    expect(getByText("Title text")).toBeInTheDocument();
    expect(getByText(textParagraphs)).toBeInTheDocument();
  })

  test("should be delete", () => {
    const { getByTestId } = RenderWithForm(
      <EditorCode
        index={0}
        theme={BgEnum.BG_COLOR}
        onRemove={onRemove}
        setBlocksValue={setBlocksValue}
      />,
      {
        defaultValues: {}
      }
    );

    const xClose = getByTestId("x-close");

    fireEvent.click(xClose);
    expect(onRemove).toHaveBeenCalled();
  })
})