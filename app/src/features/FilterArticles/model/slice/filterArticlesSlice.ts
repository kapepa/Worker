import {createSlice, Reducer, Slice} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {FilterArticlesState} from "../types/filterArticlesState";
import {ArticleOrderSort} from "../../../../shared/const/ArticleOrderSort";
import {ArticleOrderField} from "../../../../shared/const/ArticleOrderField";
import {ArticlesQuery} from "../../../../shared/const/ArticlesQuery";
import {ArticleTypesAdditionName, ArticleTypesTabs} from "../../../../shared/const/ArticleTypesTabs";

const initialState: FilterArticlesState = {
  order: ArticleOrderSort.DESC,
  sort: ArticleOrderField.CREATED,
  tab: ArticleTypesAdditionName.ALL,
  search: "",
  skip: ArticlesQuery.Skip,
  take: ArticlesQuery.Take,
}

const filterArticlesSlice: Slice = createSlice({
  name: 'filterArticles',
  initialState,
  reducers: {
    setOrderArticles(state: FilterArticlesState, action: PayloadAction<ArticleOrderSort>): void {
      state.order = action.payload;
    },
    setSortArticles(state: FilterArticlesState, action: PayloadAction<ArticleOrderField>): void {
      state.sort = action.payload;
    },
    setSearchArticles(state: FilterArticlesState, action: PayloadAction<string>): void {
      state.search = action.payload;
    },
    setTabArticles(state: FilterArticlesState, action: PayloadAction<ArticleTypesTabs>): void {
      state.tab = action.payload;
    },
    setQueryArticles(state: FilterArticlesState, action: PayloadAction<{skip: number, take: number}>): void {
      const { skip, take } = action.payload;
      state.skip = skip ?? ArticlesQuery.Skip;
      state.take = take ?? ArticlesQuery.Take;
    },
    setQueryAll(state: FilterArticlesState, action: PayloadAction<FilterArticlesState>): void {
      if(!!action.payload.skip) state.skip = Number(action.payload.skip);
      if(!!action.payload.take) state.skip = Number(action.payload.take);
      if(!!action.payload.order) state.order = action.payload.order;
      if(!!action.payload.sort) state.sort = action.payload.sort;
      if(!!action.payload.search) state.search = action.payload.search;
    }
  },
})

const filterArticlesActions  = filterArticlesSlice.actions;
const filterArticlesReducer: Reducer = filterArticlesSlice.reducer;

export {filterArticlesActions, filterArticlesReducer};