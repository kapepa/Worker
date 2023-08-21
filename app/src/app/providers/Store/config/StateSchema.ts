import {CounterState} from "../../../../entities/Counter";
import {UsersState} from "../../../../entities/Users";
import {AuthState} from "../../../../features/AuthByUsername";
import {ProfileState} from "../../../../entities/Profile";
import {NavigateFunction} from "react-router/dist/lib/hooks";
import {DetailsState} from "../../../../entities/Article/model/types/detailsState";

interface StateSchema {
  counter: CounterState,
  users: UsersState,
  auth: AuthState,
  profile: ProfileState,
  details: DetailsState,
};

interface ThunkExtraArg {
  navigate?: NavigateFunction,
  toForm?: (obj: { [key: string]: any } | undefined) => FormData,
}

export type {StateSchema, ThunkExtraArg}