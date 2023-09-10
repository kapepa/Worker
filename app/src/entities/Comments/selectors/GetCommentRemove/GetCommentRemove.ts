import {createSelector} from "@reduxjs/toolkit";
import {GetComments} from "../GetComments/GetComments";
import {CommentsState} from "../../model/types/commentsState";

const GetCommentRemove = createSelector(
  GetComments,
  (state: CommentsState) => state.remove
)

export { GetCommentRemove }