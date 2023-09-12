import {FetchAllArticles} from "./FetchAllArticles";
import Axios from "../../../../utils/axios";
import {ArticleType} from "../../model/types/articleType";
import Article from "../../../../shared/test/mock/article.json"
import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../app/providers/Store";
import {ArticlesState} from "../../model/types/articlesState";
import {ArticlesView} from "../../../../shared/const/ArticlesView";

jest.mock("../../../../utils/axios");
const mockAxios = jest.mocked(Axios, true);

describe("FetchAllArticles", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;
  let ArticlesMock: ArticleType[] = [{ ... Article.article, blocks: [Article.code, Article.text, Article.image] } as ArticleType];

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn(() => {
      return {
        articles: {
          ids: [],
          entities: {},
          data: undefined,
          error: undefined,
          loading: false,
          view: ArticlesView.Block,
          hasMore: false,
        } as ArticlesState
      } as StateSchema
    });
  })

  test("should be defined resolve", async () => {
    mockAxios.get.mockResolvedValue({ data: ArticlesMock });
    const action = FetchAllArticles({ take: 1, skip: 0 });
    const result = await action(dispatch, getState, {});

    expect(mockAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('fulfilled');
    expect(result.payload).toEqual(ArticlesMock);
  })

  test("should be defined reject", async () => {
    mockAxios.get.mockRejectedValue({status: 403});
    const action = FetchAllArticles({ take: 1, skip: 0 });
    const result = await action(dispatch, getState, {});

    expect(mockAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('rejected');
    expect(result.payload).toEqual("all-articles-error");
  })
})