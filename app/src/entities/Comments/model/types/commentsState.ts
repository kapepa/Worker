import {CommentsTypes} from "./commentsTypes";
import {EntityState} from "@reduxjs/toolkit";

export interface CommentsState extends EntityState<CommentsTypes>{
  loading: boolean,
  data: CommentsTypes[] | undefined,
  error: string | undefined,
}