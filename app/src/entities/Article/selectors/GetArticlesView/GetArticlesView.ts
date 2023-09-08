import {createSelector} from "@reduxjs/toolkit";
import {GetArticles} from "../GetArticles/GetArticles";
import {ArticlesState} from "../../model/types/articlesState";

const GetArticlesView = createSelector(
  GetArticles,
  (state: ArticlesState) => state.view
);

export { GetArticlesView };