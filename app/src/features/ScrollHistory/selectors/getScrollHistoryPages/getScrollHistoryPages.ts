import {createSelector} from "@reduxjs/toolkit";
import {GetScrollHistory} from "../getScrollHistory/getScrollHistory";
import {ScrollHistoryState} from "../../model/types/ScrollHistoryState";

const GetScrollHistoryPages = (page: string) => createSelector(
  GetScrollHistory,
  (state: ScrollHistoryState) => state.pages[page] ?? 0,
)

export {GetScrollHistoryPages};