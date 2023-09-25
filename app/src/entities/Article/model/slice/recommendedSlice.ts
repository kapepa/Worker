import {createSlice, Reducer} from '@reduxjs/toolkit'
import {RecommendedState} from "../types/recommendedState";

const initialState: RecommendedState = {
  ids: [],
  entities: {},
  error: undefined,
  loading: false
};

const recommendedSlice = createSlice({
  name: 'recommendedArticle',
  initialState,
  reducers: {

  },
})

const RecommendedActions = recommendedSlice.actions;
const RecommendedReducer: Reducer = recommendedSlice.reducer;
export {RecommendedActions, RecommendedReducer};