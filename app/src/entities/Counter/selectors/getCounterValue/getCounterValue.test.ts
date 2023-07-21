import {GetCounterValue} from "./getCounterValue";
import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../app/providers/Store";

describe("GetCounterValue", () => {
  test("get value", () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 10 } }
    expect(GetCounterValue(state as StateSchema)).toEqual(10);
  })
})