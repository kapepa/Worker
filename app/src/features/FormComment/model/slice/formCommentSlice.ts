import {createSlice, Reducer} from "@reduxjs/toolkit";
import {FormCommentState} from "../types/formCommentState";
import {CreateComment} from "../../service/CreateComment/CreateComment";

const initialState: FormCommentState = {
  loading: false,
  error: undefined,
  text: undefined,
}

const formCommentSlice = createSlice({
  name: 'formComment',
  initialState,
  reducers: {
    changeComment(state: FormCommentState, action) {
      state.text = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(CreateComment.pending, (state: FormCommentState) => {
        state.loading = !state.loading;
        state.error = undefined;
      })
      .addCase(CreateComment.fulfilled, (state: FormCommentState) => {
        state.loading = false;
      })
      .addCase(CreateComment.rejected, (state: FormCommentState, action ) => {
        state.loading = false;
        state.error = action.payload
      })
})

const FormCommentActions = formCommentSlice.actions;
const FormCommentReducer: Reducer = formCommentSlice.reducer;

export {FormCommentActions, FormCommentReducer}