import {createSelector} from "@reduxjs/toolkit";
import {GetFilterArticles} from "../getFilterArticles/getFilterArticles";
import {FilterArticlesState} from "../../model/types/filterArticlesState";

const GetFilterArticlesSearch = createSelector(
  GetFilterArticles,
  (state: FilterArticlesState) => state.search,
);

export {GetFilterArticlesSearch};