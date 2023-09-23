import {filterArticlesActions, filterArticlesReducer} from "./filterArticlesSlice";
import {FilterArticlesState} from "../types/filterArticlesState";
import {ArticleOrderSort} from "../../../../shared/const/ArticleOrderSort";
import {ArticleOrderField} from "../../../../shared/const/ArticleOrderField";
import {ArticleTypesAdditionName} from "../../../../shared/const/ArticleTypesTabs";
import {ArticlesQuery} from "../../../../shared/const/ArticlesQuery";
import {ArticleTypesKey} from "../../../../entities/Article/model/types/articleType";

describe("filterArticlesSlice", () => {
  let state: FilterArticlesState;
  let {
    setOrderArticles,
    setSortArticles,
    setSearchArticles,
    setTabArticles,
    setQueryArticles,
    setQueryAll,
  } = filterArticlesActions;

  beforeAll(() => {
    state = {
      order: ArticleOrderSort.DESC,
      sort: ArticleOrderField.CREATED,
      tab: ArticleTypesAdditionName.ALL,
      search: "",
      skip: ArticlesQuery.Skip,
      take: ArticlesQuery.Take,
    }
  })

  test("setOrderArticles", () => {
    expect(filterArticlesReducer(state, setOrderArticles(ArticleOrderSort.ASC)).order)
      .toEqual(ArticleOrderSort.ASC);
  })

  test("setSortArticles", () => {
    expect(filterArticlesReducer(state, setSortArticles(ArticleOrderField.VIEWS)).sort)
      .toEqual(ArticleOrderField.VIEWS);
  })

  test("setSearchArticles", () => {
    const mockStr: string = "mock text";
    expect(filterArticlesReducer(state, setSearchArticles(mockStr)).search)
      .toEqual(mockStr);
  })

  test("setTabArticles", () => {
    expect(filterArticlesReducer(state, setTabArticles(ArticleTypesKey.IT)).tab)
      .toEqual(ArticleTypesKey.IT);
  })

  test("setQueryArticles", () => {
    expect(filterArticlesReducer(state, setQueryArticles({skip: 5, take: 5})))
      .toEqual({ ...state, skip: 5, take: 5 });
  })

  test("setQueryAll", () => {
    const newState: FilterArticlesState = {
      order: ArticleOrderSort.ASC,
      sort: ArticleOrderField.VIEWS,
      tab: ArticleTypesKey.IT,
      search: "mock text",
      skip: 5,
      take: 5,
    }
    expect(filterArticlesReducer(state, setQueryAll(newState)))
      .toEqual(newState);
  })
})