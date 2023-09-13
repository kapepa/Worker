import {CommentsState} from "../types/commentsState";
import {AnyAction, createEntityAdapter, createSlice, PayloadAction, Reducer} from "@reduxjs/toolkit";
import {FetchCommentsArtById} from "../../services/FetchCommentsArtById/FetchCommentsArtById";
import {CommentsTypes} from "../types/commentsTypes";
import {StateSchema} from "../../../../app/providers/Store";
import {CommentRemove} from "../types/commentRemove";
import {DeleteCommentById} from "../../services/DeleteCommentById/DeleteCommentById";

export const commentsAdapter = createEntityAdapter<CommentsTypes>({
  selectId: (comment: CommentsTypes) => comment.id,

})

const initialState: CommentsState = {
  loading: false,
  error: undefined,
  data: undefined,
  remove: undefined,
  ids: [],
  entities: {},
}

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsAdapter.getInitialState(initialState),
  reducers: {
    removeComment: (state: CommentsState, action: PayloadAction<CommentRemove | undefined> ) => {
      state.remove = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchCommentsArtById.pending, (state: CommentsState) => {
        state.loading = !state.loading;
        state.error = undefined;
      })
      .addCase(FetchCommentsArtById.fulfilled, (state: CommentsState, action: AnyAction) => {
        state.data = action.payload;
        state.loading = false;
        commentsAdapter.setAll(state, action.payload)
      })
      .addCase(FetchCommentsArtById.rejected, (state: CommentsState, action) => {
        state.loading = false;
        state.error = action.payload
      })
      .addCase(DeleteCommentById.pending, (state: CommentsState) => {
        state.loading = !state.loading;
        state.error = undefined;
      })
      .addCase(DeleteCommentById.fulfilled, (state: CommentsState, action: PayloadAction<string>) => {
        state.loading = false;
        commentsAdapter.removeOne(state, action.payload);
      })
      .addCase(DeleteCommentById.rejected, (state: CommentsState, action) => {
        state.loading = false;
        state.error = action.payload
      })
  },
})

const getCommentsAdapter = commentsAdapter.getSelectors((state: StateSchema) => state.comments);
const commentsActions = commentsSlice.actions;
const CommentsReducer: Reducer = commentsSlice.reducer;

export { commentsActions, CommentsReducer, getCommentsAdapter };