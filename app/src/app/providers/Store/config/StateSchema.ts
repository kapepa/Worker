import {CounterState} from "../../../../entities/Counter";
import {UsersState} from "../../../../entities/Users";
import {AuthState} from "../../../../features/AuthByUsername";
import {ProfileState} from "../../../../entities/Profile";
import {NavigateFunction} from "react-router/dist/lib/hooks";

interface StateSchema {
  counter: CounterState,
  users: UsersState,
  auth: AuthState,
  profile: ProfileState,
};

interface ThunkExtraArg {
  navigate?: NavigateFunction,
}

export type {StateSchema, ThunkExtraArg}