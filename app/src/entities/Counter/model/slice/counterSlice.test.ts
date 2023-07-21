import CounterReducer, {CounterActions} from "./counterSlice";
import {DeepPartial} from "@reduxjs/toolkit";
import {CounterState} from "../types";

describe("CounterReducer", () => {
  test("decrement", () => {
    const state: DeepPartial<CounterState> = { value: 10 }
    expect(CounterReducer(state as CounterState, CounterActions.decrement())).toEqual({ value: 9 })
  })

  test("decrement", () => {
    const state: DeepPartial<CounterState> = { value: 10 }
    expect(CounterReducer(state as CounterState, CounterActions.increment())).toEqual({ value: 11 })
  })

  test("default state", () => {
    expect(CounterReducer(undefined, CounterActions.increment())).toEqual({ value: 1 })
  })
})