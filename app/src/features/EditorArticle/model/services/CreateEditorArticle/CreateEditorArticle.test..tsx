import Axios from "../../../../../utils/axios";
import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../../app/providers/Store";
import {EditorArticleState} from "../../types/EditorArticleState";
import ArticleJSON from "../../../../../shared/test/mock/article.json"
import {ArticleType} from "../../../../../entities/Article/model/types/articleType";
import {CreateEditorArticle} from "./CreateEditorArticle";

jest.mock("../../../../../utils/axios")
const mockAxios = jest.mocked(Axios, true)

describe("CreateEditorArticle", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;
  let editorState: EditorArticleState = {
    loading: false,
    error: undefined,
    idArt: undefined,
    record: ArticleJSON.article as ArticleType,
    edit: undefined,
  }

  beforeEach(() => {
    dispatch = jest.fn();
    getState = () => (
      {
        editorArticle: editorState,
      } as StateSchema
    );
  })

  test("should be fulfilled", async () => {
    mockAxios.post.mockResolvedValue({data: ArticleJSON.article as ArticleType});
    const action = CreateEditorArticle();
    const result = await action(dispatch, getState, {});

    expect(mockAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
  })

  test("should be reject", async () => {
    mockAxios.post.mockRejectedValue({status: 403});
    const action = CreateEditorArticle();
    const result = await action(dispatch, getState, {});

    expect(mockAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('rejected');
    expect(result.payload).toEqual("error-editor-article");
  })
})