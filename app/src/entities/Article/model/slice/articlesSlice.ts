import {createEntityAdapter, createSlice, PayloadAction, Reducer} from '@reduxjs/toolkit';
import {ArticlesState} from "../types/articlesState";
import {FetchAllArticles} from "../../service/FetchAllArticles/FetchAllArticles";
import {ArticlesView} from "../../../../shared/const/ArticlesView";
import {FetchAllArticlesRes} from "../../../../features/FilterArticles";

export const articlesAdapter = createEntityAdapter();

const initialState = articlesAdapter.getInitialState<ArticlesState>({
  loading: false,
  data: undefined,
  error: undefined,
  ids: [],
  entities: {},
  view: ArticlesView.Block,
  hasMore: true,
})

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    changeView: ( state: ArticlesState, action: PayloadAction<ArticlesView> ) => {
      state.view = action.payload;
    },
    cleanArticles: ( state: ArticlesState ) => {
      articlesAdapter.removeAll(state);
    },
    resetHasMore: (state: ArticlesState) => {
      state.hasMore = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchAllArticles.pending, (state: ArticlesState) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(FetchAllArticles.fulfilled, (state: ArticlesState, action: PayloadAction<FetchAllArticlesRes>) => {
        const { replace, articles } = action.payload;
        replace ? articlesAdapter.setAll(state, articles) : articlesAdapter.addMany(state, articles);
        state.loading = false;
        state.hasMore = articles.length > 0;
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