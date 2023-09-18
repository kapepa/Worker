import {ScrollHistoryPage, ScrollHistoryState} from "../types/ScrollHistoryState";
import {createSlice, PayloadAction, Reducer} from "@reduxjs/toolkit";

const initialState: ScrollHistoryState = {
  pages: {}
}

const ScrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrollPage(state: ScrollHistoryState, action: PayloadAction<ScrollHistoryPage>): void {
      const { page, position } = action.payload;
      state.pages[page] = {page, position};
    },
  },
})

const ScrollActions = ScrollSlice.actions;
const ScrollReducer: Reducer = ScrollSlice.reducer;

export {ScrollActions, ScrollReducer}

