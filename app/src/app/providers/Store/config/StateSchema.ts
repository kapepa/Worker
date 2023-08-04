import {CounterState} from "../../../../entities/Counter";
import {UsersState} from "../../../../entities/Users";
import {AuthState} from "../../../../features/AuthByUsername";
import {ProfileState} from "../../../../entities/Profile";

interface StateSchema {
  counter: CounterState,
  users: UsersState,
  auth: AuthState,
  profile: ProfileState,
};

export type {StateSchema}