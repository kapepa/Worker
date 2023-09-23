import {createSelector} from "@reduxjs/toolkit";
import {GetFilterArticles} from "../getFilterArticles/getFilterArticles";
import {FilterArticlesState} from "../../model/types/filterArticlesState";

const GetFilterArticlesTake = createSelector(
  GetFilterArticles,
  (state: FilterArticlesState) => state.take,
);

export {GetFilterArticlesTake}