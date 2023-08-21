import {createSlice, PayloadAction, Reducer} from "@reduxjs/toolkit";
import {DetailsState} from "../types/detailsState";
import {FetchArticleById} from "../../service/FetchArticleById/FetchArticleById";
import {ArticleType} from "../types/articleType";

const initialState: DetailsState = {
  loading: false,
  error: undefined,
  data: undefined,
}

const DetailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchArticleById.pending, (state: DetailsState) => {
        state.loading = !state.loading;
        state.error = undefined;
      })
      .addCase(FetchArticleById.fulfilled, (state: DetailsState, action: PayloadAction<ArticleType>) => {
        state.data = action.payload;
        state.loading = !state.loading;
      })
      .addCase(FetchArticleById.rejected, (state: DetailsState, action) => {
        state.loading = !state.loading;
        state.error = action.payload;
      })
  }
})

const DetailsActions = DetailsSlice.actions;
const DetailsReducers: Reducer = DetailsSlice.reducer;

export { DetailsActions, DetailsReducers };