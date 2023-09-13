import {createSelector} from "@reduxjs/toolkit";
import {GetArticles} from "../GetArticles/GetArticles";
import {ArticlesState} from "../../model/types/articlesState";

const GetArticlesHasMore = createSelector(
  GetArticles,
  (state: ArticlesState) => state.hasMore,
)

export {GetArticlesHasMore};