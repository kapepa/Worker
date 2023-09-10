import {CommentsTypes} from "./commentsTypes";
import {EntityState} from "@reduxjs/toolkit";
import {CommentRemove} from "./commentRemove";

export interface CommentsState extends EntityState<CommentsTypes>{
  loading: boolean,
  data: CommentsTypes[] | undefined,
  error: string | undefined,
  remove?: CommentRemove | undefined,
}