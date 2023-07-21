import {createSelector} from "@reduxjs/toolkit";
import {GetCounter} from "../getCounter/getCounter";
import {CounterState} from "../../model/types";

const GetCounterValue = createSelector(
  GetCounter,
  (counter: CounterState) => counter.value,
);


export {GetCounterValue};