import {createSelector} from "@reduxjs/toolkit";
import {GetEditorArticle} from "../GetEditorArticle/GetEditorArticle";
import {EditorArticleState} from "../../types/EditorArticleState";

const GetEditorArticleEdit = createSelector(
  GetEditorArticle,
  (state: EditorArticleState) => state.edit,
);

export {GetEditorArticleEdit};