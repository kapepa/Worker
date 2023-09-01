import {createSelector} from "@reduxjs/toolkit";
import {GetFormComment} from "../getFormComment/getFormComment";
import {FormCommentState} from "../../model/types/formCommentState";

const GetFormCommentText = createSelector(
  GetFormComment,
  (state: FormCommentState) => state.text
)

export {GetFormCommentText};