import {commentsActions, CommentsReducer, getCommentsAdapter} from "./model/slice/commentsSlice";
import {CommentsState} from "./model/types/commentsState";
import {CommentsTypes} from "./model/types/commentsTypes";
import {CommentsCard} from "./ui/CommentsCard/CommentsCard";
import {CommentsList} from "./ui/CommentsList/CommentsList";
import {GetComments} from "./selectors/GetComments/GetComments";
import {GetCommentsLoader} from "./selectors/GetCommentsLoader/GetCommentsLoader";
import {FetchCommentsArtById} from "./services/FetchCommentsArtById/FetchCommentsArtById";

export {commentsActions, CommentsReducer, CommentsCard, CommentsList, GetComments, GetCommentsLoader, FetchCommentsArtById, getCommentsAdapter};
export type {CommentsState, CommentsTypes}