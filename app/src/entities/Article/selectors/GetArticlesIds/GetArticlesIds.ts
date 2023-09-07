import {createSelector} from "@reduxjs/toolkit";
import {GetArticles} from "../GetArticles/GetArticles";
import {ArticlesState} from "../../model/types/articlesState";

const GetArticlesIds = createSelector(
  GetArticles,
  (state: ArticlesState) => state.ids,
)

export {GetArticlesIds};