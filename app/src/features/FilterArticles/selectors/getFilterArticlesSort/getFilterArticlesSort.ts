import {createSelector} from "@reduxjs/toolkit";
import {GetFilterArticles} from "../getFilterArticles/getFilterArticles";
import {FilterArticlesState} from "../../model/types/filterArticlesState";

const GetFilterArticlesSort = createSelector(
  GetFilterArticles,
  (state: FilterArticlesState) => state.sort,
);

export {GetFilterArticlesSort};