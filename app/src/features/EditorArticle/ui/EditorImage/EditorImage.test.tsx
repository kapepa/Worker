import {ArticleType} from "../../../../entities/Article/model/types/articleType";
import ArticleJSON from "../../../../shared/test/mock/article.json";
import {ArticleBlocImage} from "../../../../entities/Article/model/types/articleBlock";
import RenderWithForm from "../../../../shared/test/renderWithForm";
import {EditorImage} from "./EditorImage";
import {EditorCode} from "../EditorCode/EditorCode";
import {BgEnum} from "../../../../shared/const/BgEnum";
import {fireEvent} from "@testing-library/react";

describe("<EditorImage/>", () => {
  const defaultMock: ArticleType = {...ArticleJSON.article, blocks: [ArticleJSON.image as ArticleBlocImage]} as ArticleType;
  const onRemove = jest.fn();
  const setBlocksValue = jest.fn();

  test("should be defined", () => {
    const {debug, getByText, getByAltText} = RenderWithForm(
      <EditorImage
        index={0}
        onRemove={onRemove}
        setBlocksValue={setBlocksValue}
      />,
      {defaultValues: defaultMock as any}
    );
    const img = getByAltText("loader");

    expect(getByText("Title image")).toBeInTheDocument();
    expect(img).toHaveAttribute("src", ArticleJSON.image.src);
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