import {GetCounter} from "./getCounter";
import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../app/providers/Store";

describe("GetCounter", () => {
  test("get value", () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 10 } }
    expect(GetCounter(state as StateSchema)).toEqual({ value: 10 });
  })
})