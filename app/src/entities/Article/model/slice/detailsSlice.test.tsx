import {DetailsState} from "../types/detailsState";
import {DetailsReducers} from "./detailsSlice";
import {ArticleType, ArticleTypesKey} from "../types/articleType";
import {FetchArticleById} from "../../service/FetchArticleById/FetchArticleById";

describe("DetailsSlice", () => {
  const state: DetailsState = { loading: false, error: undefined, data: undefined };
  const mockDetails: ArticleType = { id: "detailsID", type: [ArticleTypesKey.IT], title: "DetailsTitle" } as ArticleType;

  test("FetchArticleById pending", () => {
    const mockState = Object.assign({}, state);
    expect( DetailsReducers(mockState, FetchArticleById.pending) )
      .toEqual({...mockState, loading: true});
  })

  test("FetchArticleById fulfilled", () => {
    const mockState = Object.assign({}, state);
    expect( DetailsReducers(mockState, FetchArticleById.fulfilled(mockDetails, "", "")) )
      .toEqual({...mockState, data: mockDetails});
  })
})