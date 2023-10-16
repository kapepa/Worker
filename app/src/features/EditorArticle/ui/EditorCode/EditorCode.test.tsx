import RenderWithForm from "../../../../shared/test/renderWithForm";
import {EditorCode} from "./EditorCode";
import {BgEnum} from "../../../../shared/const/BgEnum";
import ArticleJSON from "../../../../shared/test/mock/article.json";
import {ArticleType} from "../../../../entities/Article/model/types/articleType";
import {ArticleBlockCode} from "../../../../entities/Article/model/types/articleBlock";
import {fireEvent} from "@testing-library/react";

describe("<EditorCode/>", () => {
  const defaultMock: ArticleType = {...ArticleJSON.article, blocks: [ArticleJSON.code as ArticleBlockCode]} as ArticleType;
  const onRemove = jest.fn();
  const setBlocksValue = jest.fn();

  test("should be defined", () => {
    const { getByPlaceholderText } = RenderWithForm(
      <EditorCode
        index={0}
        theme={BgEnum.BG_COLOR}
        onRemove={onRemove}
        setBlocksValue={setBlocksValue}
      />,
      {
        defaultValues: defaultMock as any,
      }
    )

    expect( getByPlaceholderText("Your text for block")).toBeInTheDocument();
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