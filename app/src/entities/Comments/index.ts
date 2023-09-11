import {commentsActions, CommentsReducer, getCommentsAdapter} from "./model/slice/commentsSlice";
import {CommentsState} from "./model/types/commentsState";
import {CommentsTypes} from "./model/types/commentsTypes";
import {CommentsCard} from "./ui/CommentsCard/CommentsCard";
import {CommentsList} from "./ui/CommentsList/CommentsList";
import {GetComments} from "./selectors/GetComments/GetComments";
import {GetCommentsLoader} from "./selectors/GetCommentsLoader/GetCommentsLoader";
import {FetchCommentsArtById} from "./services/FetchCommentsArtById/FetchCommentsArtById";
import {CommentRemove} from "./model/types/commentRemove";
import {GetCommentRemove} from "./selectors/GetCommentRemove/GetCommentRemove";
import {DeleteCommentById} from "./services/DeleteCommentById/DeleteCommentById";

export {
  commentsActions,
  CommentsCard,
  CommentsList,
  getCommentsAdapter,
  CommentsReducer,
  GetComments,
  GetCommentsLoader,
  FetchCommentsArtById,
  GetCommentRemove,
  DeleteCommentById,
};
export type {CommentsState, CommentsTypes, CommentRemove};