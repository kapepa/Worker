import {createSelector} from "@reduxjs/toolkit";
import {GetEditorArticle} from "../GetEditorArticle/GetEditorArticle";
import {EditorArticleState} from "../../types/EditorArticleState";

const GetEditorArticleId = createSelector(
  GetEditorArticle,
  (state: EditorArticleState) => state.idArt,
)

export {GetEditorArticleId};