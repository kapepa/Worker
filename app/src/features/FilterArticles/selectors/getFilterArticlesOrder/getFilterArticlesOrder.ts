import {createSelector} from "@reduxjs/toolkit";
import {FilterArticlesState} from "../../model/types/filterArticlesState";
import {GetFilterArticles} from "../getFilterArticles/getFilterArticles";

const GetFilterArticlesOrder = createSelector(
  GetFilterArticles,
  (state: FilterArticlesState) => state.order
);

export {GetFilterArticlesOrder};