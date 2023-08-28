import {createSlice, Reducer} from "@reduxjs/toolkit";
import {FormCommentState} from "../types/formCommentState";

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
})

const FormCommentActions = formCommentSlice.actions;
const FormCommentReducer: Reducer = formCommentSlice.reducer;

export {FormCommentActions, FormCommentReducer}