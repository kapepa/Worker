import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../../app/providers/Store";
import {EditorArticleState} from "../../types/EditorArticleState";
import ArticleJSON from "../../../../../shared/test/mock/article.json";
import {ArticleType} from "../../../../../entities/Article/model/types/articleType";
import Axios from "../../../../../utils/axios";
import {FetchEditorArticle} from "./FetchEditorArticle";

jest.mock("../../../../../utils/axios")
const mockAxios = jest.mocked(Axios, true)

describe("FetchEditorArticle", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;
  let editorState: EditorArticleState = {
    loading: false,
    error: undefined,
    idArt: ArticleJSON.article.id,
    record: {},
    edit: undefined,
  }

  beforeEach(() => {
    dispatch = jest.fn();
    getState = () => (
      {editorArticle: editorState} as StateSchema
    )
  })

  test("should be fulfilled", async () => {
    mockAxios.get.mockResolvedValue({data: ArticleJSON.article as ArticleType});
    const action = FetchEditorArticle();
    const result = await action(dispatch, getState, {});

    expect(mockAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
  })

  test("should be reject", async () => {
    mockAxios.get.mockRejectedValue({status: 403});
    const action = FetchEditorArticle();
    const result = await action(dispatch, getState, {});

    expect(mockAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
    expect(result.payload).toEqual("error-editor-article");
  })
})