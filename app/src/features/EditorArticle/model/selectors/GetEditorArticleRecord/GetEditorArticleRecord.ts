import {createSelector} from "@reduxjs/toolkit";
import {GetEditorArticle} from "../GetEditorArticle/GetEditorArticle";
import {EditorArticleState} from "../../types/EditorArticleState";

const GetEditorArticleRecord = createSelector(
  GetEditorArticle,
  (state: EditorArticleState) => state.record,
);

export {GetEditorArticleRecord};