import {createSelector} from "@reduxjs/toolkit";
import {GetEditorArticle} from "../GetEditorArticle/GetEditorArticle";
import {EditorArticleState} from "../../types/EditorArticleState";

const GetEditorArticleLoading = createSelector(
  GetEditorArticle,
  (state: EditorArticleState) => state.loading,
);

export {GetEditorArticleLoading};