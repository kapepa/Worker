import {EditorArticleActions, EditorArticleReducer} from "./editorArticleSlice";
import {EditorArticleState} from "../types/EditorArticleState";
import Article from "../../../../shared/test/mock/article.json";
import {ArticleBlocks, ArticleType, ArticleTypesKey} from "../../../../entities/Article/model/types/articleType";

describe("editorArticleSlice", () => {
  let state: EditorArticleState;
  let article: ArticleType = Article.article as ArticleType;
  const mockBlocks: ArticleBlocks[] = [
    Article.text as ArticleBlocks,
    Article.code as ArticleBlocks,
    Article.image as ArticleBlocks
  ];

  beforeEach(() => {
    state = {
      loading: false,
      error: undefined,
      idArt: undefined,
      record: {},
      edit: undefined,
    } as EditorArticleState
  })

  test("setIdArticle", () => {
    const mockID : string = "ArticleID";
    expect(EditorArticleReducer(state, EditorArticleActions.setIdArticle(mockID)).idArt)
      .toEqual(mockID);
  })

  test("setTitle", () => {
    state.record = article;
    const mockTitle: string = "MockTitle";

    expect(EditorArticleReducer(state, EditorArticleActions.setTitle(mockTitle)).record.title)
      .toEqual(mockTitle)
  })

  test("setSubtitle", () => {
    state.record = article;
    const mockSubtitle: string = "MockSubtitle";

    expect(EditorArticleReducer(state, EditorArticleActions.setSubtitle(mockSubtitle)).record.subtitle)
      .toEqual(mockSubtitle);
  })

  test("setImg", () => {
    state.record = article;
    const mockImg: string = "MockImg.png";

    expect(EditorArticleReducer(state, EditorArticleActions.setImg(mockImg)).record.img)
      .toEqual(mockImg);
  })

  test("setType", () => {
    state.record = article;
    const mockType: ArticleTypesKey[] = [ArticleTypesKey.SCIENCE];

    expect(EditorArticleReducer(state, EditorArticleActions.setType(mockType)).record.type)
      .toEqual(mockType);
  })

  test("setBlocks", () => {
    state.record = article;

    expect(EditorArticleReducer(state, EditorArticleActions.setBlocks(mockBlocks)).record.blocks)
      .toEqual(mockBlocks);
  })

  test("setBlocksProperty", () => {
    state.record = {...article, blocks: mockBlocks};

    expect(EditorArticleReducer(state, EditorArticleActions.setBlocksProperty({index: 0, block: mockBlocks[0]})).record)
      .toEqual({...article, blocks: mockBlocks})
  })
})