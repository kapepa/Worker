import {StateSchema} from "../../../../app/providers/Store";
import NoticeJSON from "../../../../shared/test/mock/notice.json";
import {NoticeState} from "../../model/types/notice.state";
import {GetNoticeLoading} from "./GetNoticeLoading";

describe("GetNoticeLoading", () => {
  test("should be defined", () => {
    const state: StateSchema = {
      notice: {
        loading: false,
        error: undefined,
        ids: [NoticeJSON.id],
        entities: {[NoticeJSON.id]: NoticeJSON},
      } as NoticeState,

    } as StateSchema;

    expect(GetNoticeLoading(state)).toEqual(state.notice.loading);
  })
})