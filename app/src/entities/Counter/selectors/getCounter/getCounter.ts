import {StateSchema} from "../../../../app/providers/Store";

const GetCounter = (state: StateSchema) => state.counter;

export {GetCounter};