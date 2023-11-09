import {StateSchema} from "../../../../app/providers/Store";
import {NoticeState} from "../../model/types/notice.state";
import {GetNotice} from "./GetNotice";

describe("GetNotice", () => {
  test("should be defined", () => {
    const state: StateSchema = {
      notice: {
        loading: false,
        error: undefined,
        ids: [],
        entities: {},
      } as NoticeState
    } as StateSchema;

    expect(GetNotice(state)).toEqual(state.notice);
  })
});