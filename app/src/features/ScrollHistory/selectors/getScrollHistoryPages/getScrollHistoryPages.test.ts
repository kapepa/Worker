import {StateSchema} from "../../../../app/providers/Store";
import {GetScrollHistoryPages} from "./getScrollHistoryPages";

describe("GetScrollHistoryPages", () => {
  test("should be return page", () => {
    const state: StateSchema = { scroll: { pages: {} } } as StateSchema;
    expect(GetScrollHistoryPages("/")(state)).toEqual(0)
  })
})