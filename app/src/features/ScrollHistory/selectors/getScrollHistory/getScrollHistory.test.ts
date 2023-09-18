import {StateSchema} from "../../../../app/providers/Store";
import {GetScrollHistory} from "./getScrollHistory";

describe("GetScrollHistory", () => {
  test("should be return scroll", () => {
    const state: StateSchema = { scroll: { pages: {} } } as StateSchema;

    expect(GetScrollHistory(state)).toEqual(state.scroll);
  })
})