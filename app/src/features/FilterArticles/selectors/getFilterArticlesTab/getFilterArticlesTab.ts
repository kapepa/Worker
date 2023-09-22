import {createSelector} from "@reduxjs/toolkit";
import {GetFilterArticles} from "../getFilterArticles/getFilterArticles";
import {FilterArticlesState} from "../../model/types/filterArticlesState";

const GetFilterArticlesTab = createSelector(
  GetFilterArticles,
  (state: FilterArticlesState) => state.tab
);

export {GetFilterArticlesTab}
