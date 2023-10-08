import {createSelector} from "@reduxjs/toolkit";
import {GetEditorArticle} from "../GetEditorArticle/GetEditorArticle";
import {EditorArticleState} from "../../types/EditorArticleState";

const GetEditorArticleBlocks = createSelector(
  GetEditorArticle,
  (state: EditorArticleState) => state.record.blocks,
)

export {GetEditorArticleBlocks};