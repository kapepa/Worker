import {CommentsTypes} from "./commentsTypes";

export interface CommentsState {
  loading: boolean,
  data: CommentsTypes[] | undefined,
  error: string | undefined,
}