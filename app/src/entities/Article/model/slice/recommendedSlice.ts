import {createEntityAdapter, createSlice, PayloadAction, Reducer} from '@reduxjs/toolkit'
import {RecommendedState} from "../types/recommendedState";
import {FetchRecommended} from "../../service/FetchRecommended/FetchRecommended";
import {ArticleType} from "../types/articleType";

export const recommendedAdapter = createEntityAdapter();

const initialState: RecommendedState = {
  ids: [],
  entities: {},
  error: undefined,
  loading: false
};

const recommendedSlice = createSlice({
  name: 'recommendedArticle',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchRecommended.pending, (state: RecommendedState) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(FetchRecommended.fulfilled, (state: RecommendedState, action: PayloadAction<ArticleType[]>) => {
        recommendedAdapter.addMany(state, action.payload);
        state.loading = false;
      })
      .addCase(FetchRecommended.rejected, (state: RecommendedState, action) => {
        state.loading = false;
        state.error = action.payload;
      })
  }
})

const RecommendedActions = recommendedSlice.actions;
const RecommendedReducer: Reducer = recommendedSlice.reducer;
export {RecommendedActions, RecommendedReducer};