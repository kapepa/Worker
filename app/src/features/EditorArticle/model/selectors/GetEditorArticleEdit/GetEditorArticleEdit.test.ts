import {StateSchema} from "../../../../../app/providers/Store";
import ArticleMock from "../../../../../shared/test/mock/article.json"
import {ArticleType} from "../../../../../entities/Article/model/types/articleType";
import {GetEditorArticleEdit} from "./GetEditorArticleEdit";

describe("GetEditorArticleEdit", () => {
  const articleMock: ArticleType = ArticleMock.article as ArticleType;

  test("should be defined", () => {
    const state: StateSchema = {
      editorArticle: {
        loading: false,
        error: undefined,
        idArt: undefined,
        record: articleMock,
        edit: articleMock,
      }
    } as StateSchema;
    expect(GetEditorArticleEdit(state)).toEqual(articleMock);
  })
})