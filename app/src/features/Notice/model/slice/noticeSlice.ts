import {createEntityAdapter, createSlice, Reducer} from '@reduxjs/toolkit'
import {NoticeState} from "../types/notice.state";
import type { PayloadAction } from '@reduxjs/toolkit'
import {FetchNotices} from "../services/FetchNotices/FetchNotices";
import {NoticeTypes} from "../types/notice.types";

const noticeAdapter = createEntityAdapter();

const initialState: NoticeState = {
  loading: false,
  error: undefined,
  ids: [],
  entities: {},
}

export const noticeSlice = createSlice({
  name: 'notice',
  initialState,
  reducers: {},
  extraReducers: builder => builder
    .addCase(FetchNotices.pending, (state: NoticeState) => {
      state.error = undefined;
      state.loading = true;
    })
    .addCase(FetchNotices.fulfilled, (state: NoticeState, action: PayloadAction<NoticeTypes[]>) => {
      state.loading = false;
      state.ids.length ? noticeAdapter.addMany(state, action.payload) : noticeAdapter.setAll(state, action.payload);
    })
    .addCase(FetchNotices.rejected, (state: NoticeState, action) => {
      state.loading = false;
      state.error = action.payload;
    }),
})

const NoticeActions = noticeSlice.actions;
const NoticeReducer: Reducer = noticeSlice.reducer;

export {NoticeActions, NoticeReducer}