import {createEntityAdapter, createSlice, PayloadAction, Reducer} from '@reduxjs/toolkit';
import {ArticlesState} from "../types/articlesState";
import {FetchAllArticles} from "../../service/FetchAllArticles/FetchAllArticles";
import {ArticleType} from "../types/articleType";
import {ArticlesView} from "../../../../shared/const/ArticlesView";

export const articlesAdapter = createEntityAdapter();

const initialState = articlesAdapter.getInitialState<ArticlesState>({
  loading: false,
  data: undefined,
  error: undefined,
  ids: [],
  entities: {},
  view: ArticlesView.Block,
})

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    changeView: ( state: ArticlesState, action: PayloadAction<ArticlesView> ) => {
      state.view = action.payload;
    }
  },
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