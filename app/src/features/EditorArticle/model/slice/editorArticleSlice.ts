import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice, Reducer} from '@reduxjs/toolkit'
import {EditorArticleState} from "../types/EditorArticleState";
import {ArticleFormImgType} from "../types/ArticleFormType";
import {ArticleBlocks, ArticleTypesKey} from "../../../../entities/Article/model/types/articleType";

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
    setTitle(state: EditorArticleState, action: PayloadAction<string>) {
      state.record.title = action.payload;
    },
    setSubtitle(state: EditorArticleState, action: PayloadAction<string>){
      state.record.subtitle = action.payload;
    },
    setImg(state: EditorArticleState, action: PayloadAction<ArticleFormImgType>) {
      state.record.img = action.payload;
    },
    setType(state: EditorArticleState, action: PayloadAction<ArticleTypesKey[]>) {
      state.record.type = action.payload;
    },
    setBlocks(state: EditorArticleState, action: PayloadAction<ArticleBlocks[]>) {
      state.record.blocks = action.payload;
    },
    setBlocksProperty(state: EditorArticleState, action: PayloadAction<{index: number, block: ArticleBlocks}>) {
      const { index, block } = action.payload;
      if(state.record.blocks) state.record.blocks[index] = block;
    }
  },
})

const EditorArticleActions = editorArticleSlice.actions;
const EditorArticleReducer: Reducer = editorArticleSlice.reducer;
export {EditorArticleActions, EditorArticleReducer};