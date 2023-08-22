import Axios from "../../../../utils/axios";
import {ArticleType, ArticleTypesKey} from "../../model/types/articleType";
import {FetchArticleById} from "./FetchArticleById";

import {StateSchema} from "../../../../app/providers/Store";
import {Dispatch} from "@reduxjs/toolkit";

jest.mock("../../../../utils/axios");
const mockAxios = jest.mocked(Axios, true);

describe("FetchArticleById", () => {
  let dispatch: Dispatch;
  let getState: () => StateSchema;
  let mockDetails: ArticleType = { id: "detailsID", type: [ArticleTypesKey.IT], title: "DetailsTitle" } as ArticleType;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  })

  test("should be fulfilled", async () => {
    mockAxios.get.mockResolvedValue({data: mockDetails});
    let action = FetchArticleById(mockDetails.id as string);
    let result = await action(dispatch, getState, {});

    expect(mockAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("fulfilled");
    expect(result.payload).toEqual(mockDetails);
  })

  test("should be rejected", async () => {
    mockAxios.get.mockRejectedValue({status: 403});
    let action = FetchArticleById(mockDetails.id as string);
    let result = await action(dispatch, getState, {});

    expect(mockAxios.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toEqual("rejected");
    expect(result.payload).toEqual("error-details");
  })
})