import {CounterState} from "../../../../entities/Counter";
import {UsersState} from "../../../../entities/Users";
import {AuthState} from "../../../../features/AuthByUsername";

interface StateSchema {
  counter: CounterState,
  users: UsersState,
  auth: AuthState,
};

export type {StateSchema}