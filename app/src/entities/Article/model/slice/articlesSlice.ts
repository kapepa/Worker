import {createEntityAdapter, createSlice, PayloadAction, Reducer} from '@reduxjs/toolkit';
import {ArticlesState} from "../types/articlesState";
import {FetchAllArticles} from "../../service/FetchAllArticles/FetchAllArticles";
import {ArticleType} from "../types/articleType";

export const articlesAdapter = createEntityAdapter();

const initialState = articlesAdapter.getInitialState<ArticlesState>({
  loading: false,
  data: undefined,
  error: undefined,
  ids: [],
  entities: {},
})

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchAllArticles.pending, (state: ArticlesState) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(FetchAllArticles.fulfilled, (state: ArticlesState, action: PayloadAction<ArticleType[]>) => {
        articlesAdapter.upsertMany(state, action.payload);
        state.loading = false;
      })
      .addCase(FetchAllArticles.rejected, (state: ArticlesState, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})

const ArticlesActions = articlesSlice.actions;
const ArticlesReducer: Reducer = articlesSlice.reducer;

export { ArticlesActions, ArticlesReducer };