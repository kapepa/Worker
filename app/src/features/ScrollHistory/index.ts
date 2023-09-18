import {ScrollHistoryPage, ScrollHistoryState} from "./model/types/ScrollHistoryState";
import {ScrollActions, ScrollReducer} from "./model/slice/scrollSlice";
import {GetScrollHistory} from "./selectors/getScrollHistory/getScrollHistory";
import {GetScrollHistoryPages} from "./selectors/getScrollHistoryPages/getScrollHistoryPages";

export {ScrollActions, ScrollReducer, GetScrollHistory, GetScrollHistoryPages};
export type {ScrollHistoryState, ScrollHistoryPage};