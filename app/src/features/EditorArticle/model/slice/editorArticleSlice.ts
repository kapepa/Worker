import {createSlice, Reducer} from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {EditorArticleState} from "../types/EditorArticleState";

const initialState: EditorArticleState = {
  loading: false,
  error: undefined,
  idArt: undefined,
  record: {},
  edit: undefined,
}

const editorArticleSlice = createSlice({
  name: 'editorArticle',
  initialState,
  reducers: {
    setIdArticle(state: EditorArticleState, action: PayloadAction<string>) {
      state.idArt = action.payload;
    },
    setTitle(state, action: PayloadAction<string>) {
      state.record.title = action.payload;
    },
  },
})

const EditorArticleActions = editorArticleSlice.actions;
const EditorArticleReducer: Reducer = editorArticleSlice.reducer;
export {EditorArticleActions, EditorArticleReducer};