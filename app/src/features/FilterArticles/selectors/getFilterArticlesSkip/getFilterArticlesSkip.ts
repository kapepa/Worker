import {createSelector} from "@reduxjs/toolkit";
import {GetFilterArticles} from "../getFilterArticles/getFilterArticles";
import {FilterArticlesState} from "../../model/types/filterArticlesState";

const GetFilterArticlesSkip = createSelector(
  GetFilterArticles,
  (state: FilterArticlesState) => state.skip,
);

export {GetFilterArticlesSkip};