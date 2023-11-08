import {NoticeState} from "../types/notice.state";
import {NoticeReducer} from "./noticeSlice";
import {FetchNotices} from "../services/FetchNotices/FetchNotices";
import NoticeJSON from "../../../../shared/test/mock/notice.json";

describe("noticeSlice", () => {
  let state: NoticeState = {
    loading: false,
    error: undefined,
    ids: [],
    entities: {},
  }

  test("FetchNotices pending", () => {
    let reducer = NoticeReducer(state, {type: FetchNotices.pending})

    expect(reducer.loading).toBeTruthy();
  })

  test("FetchNotices fulfilled", () => {
    let reducer = NoticeReducer(state, {type: FetchNotices.fulfilled, payload: [NoticeJSON]});

    expect(reducer.entities).toEqual({[NoticeJSON.id]: NoticeJSON});
  })

  test("FetchNotices pending", () => {
    let mockError = "error-get-notices";
    let reducer = NoticeReducer(state, {type: FetchNotices.rejected, payload: mockError});

    expect(reducer.error).toEqual(mockError);
  })
})