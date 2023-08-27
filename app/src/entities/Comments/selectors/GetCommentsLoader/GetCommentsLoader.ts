import {createSelector} from "@reduxjs/toolkit";
import {GetComments} from "../GetComments/GetComments";
import {CommentsState} from "../../model/types/commentsState";

const GetCommentsLoader = createSelector(
  GetComments,
  (state: CommentsState) => state.loading
)

export {GetCommentsLoader};