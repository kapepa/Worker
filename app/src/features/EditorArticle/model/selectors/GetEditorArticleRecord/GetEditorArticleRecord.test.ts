import {StateSchema} from "../../../../../app/providers/Store";
import ArticleMock from "../../../../../shared/test/mock/article.json"
import {ArticleType} from "../../../../../entities/Article/model/types/articleType";
import {GetEditorArticleRecord} from "./GetEditorArticleRecord";

describe("GetEditorArticleRecord", () => {
  const articleMock: ArticleType = ArticleMock.article as ArticleType;

  test("should be defined", () => {
    const state: StateSchema = {
      editorArticle: {
        loading: false,
        error: undefined,
        idArt: undefined,
        record: articleMock,
        edit: undefined,
      }
    } as StateSchema;

    expect(GetEditorArticleRecord(state)).toEqual(articleMock)
  })
})