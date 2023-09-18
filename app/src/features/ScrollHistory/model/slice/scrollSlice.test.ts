import {StateSchema} from "../../../../app/providers/Store";
import {ScrollActions, ScrollReducer} from "./scrollSlice";
import {ScrollHistoryPage, ScrollHistoryState} from "../types/ScrollHistoryState";

describe("ScrollSlice", () => {
  test("setScrollPage", () => {
    const state: ScrollHistoryState =  { pages: {} } as ScrollHistoryState;
    const mockPage: ScrollHistoryPage = { page: "/page", position: 0 };

    expect(ScrollReducer(state, ScrollActions.setScrollPage(mockPage)))
      .toEqual({pages: {[mockPage.page]: mockPage}});
  })
})