import {StateSchema} from "../../../../app/providers/Store";
import {NoticeState} from "../../model/types/notice.state";
import {GetNoticeEntities} from "./GetNoticeEntities";
import NoticeJSON from "../../../../shared/test/mock/notice.json";

describe("GetNoticeEntities", () => {
  test("should be defined", () => {
    const state: StateSchema = {
      notice: {
        loading: false,
        error: undefined,
        ids: [NoticeJSON.id],
        entities: {[NoticeJSON.id]: NoticeJSON},
      } as NoticeState
    } as StateSchema;

    expect(GetNoticeEntities(state)).toEqual(state.notice.entities);
  })
})