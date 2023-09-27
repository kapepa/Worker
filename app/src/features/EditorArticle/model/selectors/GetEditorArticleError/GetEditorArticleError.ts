import {createSelector} from "@reduxjs/toolkit";
import {GetEditorArticle} from "../GetEditorArticle/GetEditorArticle";
import {EditorArticleState} from "../../types/EditorArticleState";

const GetEditorArticleError = createSelector(
  GetEditorArticle,
  (state: EditorArticleState) => state.error,
);

export {GetEditorArticleError};