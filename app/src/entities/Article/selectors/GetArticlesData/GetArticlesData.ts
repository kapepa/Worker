import {createSelector} from "@reduxjs/toolkit";
import {GetArticles} from "../GetArticles/GetArticles";
import {ArticlesState} from "../../model/types/articlesState";

const GetArticlesData = createSelector(
  GetArticles,
  (state: ArticlesState) => state.data,
);

export { GetArticlesData };