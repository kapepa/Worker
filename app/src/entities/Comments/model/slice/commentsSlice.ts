import {CommentsState} from "../types/commentsState";
import {AnyAction, createEntityAdapter, createSlice, Reducer} from "@reduxjs/toolkit";
import {FetchCommentsArtById} from "../../services/FetchCommentsArtById/FetchCommentsArtById";
import {CommentsTypes} from "../types/commentsTypes";
import {StateSchema} from "../../../../app/providers/Store";

export const commentsAdapter = createEntityAdapter({
  selectId: (comment: CommentsTypes) => comment.id,
})

const initialState: CommentsState = {
  loading: false,
  error: undefined,
  data: undefined,
  ids: [],
  entities: {},
}

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentsAdapter.getInitialState(initialState),
  reducers: {},
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
  },
})

const getCommentsAdapter = commentsAdapter.getSelectors((state: StateSchema) => state.comments);
const commentsActions = commentsSlice.actions;
const CommentsReducer: Reducer = commentsSlice.reducer;

export { commentsActions, CommentsReducer, getCommentsAdapter };