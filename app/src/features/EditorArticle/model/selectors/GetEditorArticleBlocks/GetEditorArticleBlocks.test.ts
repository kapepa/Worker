import {StateSchema} from "../../../../../app/providers/Store";
import {GetEditorArticleBlocks} from "./GetEditorArticleBlocks";
import ArticleMock from "../../../../../shared/test/mock/article.json"
import {ArticleType} from "../../../../../entities/Article/model/types/articleType";

describe("GetEditorArticleBlocks", () => {
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

    expect(GetEditorArticleBlocks(state)).toEqual(articleMock.blocks);
  })
})