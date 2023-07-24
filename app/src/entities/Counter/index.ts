import {Counter} from "./ui/Counter";
import {CounterReducer} from "./model/slice/counterSlice";
import {CounterState} from "./model/types";
import {GetCounterValue} from "./selectors/getCounterValue/getCounterValue";
import {GetCounter} from "./selectors/getCounter/getCounter";

export {Counter, CounterReducer, GetCounterValue, GetCounter};
export type {CounterState};