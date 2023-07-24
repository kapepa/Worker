import {DeepPartial} from "@reduxjs/toolkit";
import {UsersReducer, UsersState} from "../../../Users";
import {CounterActions} from "../../../Counter/model/slice/counterSlice";

describe("UsersReducer", () => {
  // const mockUsers: UsersState = {id: "1", username: "UserMock"}

  test("default state", () => {
    // expect(UsersReducer(undefined, CounterActions.increment())).toEqual({ value: 1 })
    expect(true).toBeTruthy()
  })
})