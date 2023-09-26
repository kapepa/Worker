import {Dispatch} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../app/providers/Store";
import {FetchRecommended} from "./FetchRecommended";
import Axios from "../../../../utils/axios";
import {ArticleType} from "../../model/types/articleType";
import Article from "../../../../shared/test/mock/article.json"
import {ArticleOrderSort} from "../../../../shared/const/ArticleOrderSort";
import {ArticleOrderField} from "../../../../shared/const/ArticleOrderField";
import {ArticleTypesAdditionName} from "../../../../shared/const/ArticleTypesTabs";
import {ArticlesQuery} from "../../../../shared/const/ArticlesQuery";

jest.mock("../../../../utils/axios");
const mockAxios = jest.mocked(Axios, true);

describe("FetchRecommended", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;
  let article: ArticleType = Article.article as ArticleType;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn(() => (
      {
        recommendedArticle: {
          ids: [] as string[],
          entities: {},
          error: undefined,
          loading: false
        },
        filterArticles: {
          order: ArticleOrderSort.DESC,
        }
      } as StateSchema
    ))
  })

  test("should be resolve", async () => {
    mockAxios.get.mockResolvedValue({data: [article]})
    const action = FetchRecommended();
    const result= await action(dispatch, getState, {});

    expect(mockAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('fulfilled');
    expect(result.payload).toEqual([article]);
  })

  test("should be rejected", async () => {
    mockAxios.get.mockRejectedValue({status: 403})
    const action = FetchRecommended();
    const result= await action(dispatch, getState, {});

    expect(mockAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual('rejected');
    expect(result.payload).toEqual("recommended-articles-error");
  })
})