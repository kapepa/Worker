import {CommentsState} from "../types/commentsState";
import {AnyAction, createSlice, Reducer} from "@reduxjs/toolkit";
import {FetchCommentsArtById} from "../../services/FetchCommentsArtById/FetchCommentsArtById";

const initialState: CommentsState = {
  loading: false,
  error: undefined,
  data: undefined,
}

export const counterSlice = createSlice({
  name: 'comments',
  initialState,
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
      })
      .addCase(FetchCommentsArtById.rejected, (state: CommentsState, action) => {
        state.loading = false;
        state.error = action.payload
      })
  },
})

const counterActions = counterSlice.actions;
const counterReducer: Reducer = counterSlice.reducer;

export { counterActions, counterReducer };