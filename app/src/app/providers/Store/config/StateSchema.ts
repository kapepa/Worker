import {CounterState} from "../../../../entities/Counter";
import {UsersState} from "../../../../entities/Users";

interface StateSchema {
  counter: CounterState,
  users: UsersState,
};

export type {StateSchema}