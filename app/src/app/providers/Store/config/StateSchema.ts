import {CounterState} from "../../../../entities/Counter";
import {UsersState} from "../../../../entities/Users";
import {AuthState} from "../../../../features/AuthByUsername";
import {ProfileState} from "../../../../entities/Profile";
import {NavigateFunction} from "react-router/dist/lib/hooks";
import {DetailsState} from "../../../../entities/Article/model/types/detailsState";
import {CommentsState} from "../../../../entities/Comments";
import {FormCommentState} from "../../../../features/FormComment/model/types/formCommentState";

interface StateSchema {
  counter: CounterState,
  users: UsersState,
  auth: AuthState,
  profile: ProfileState,
  details: DetailsState,
  comments: CommentsState,
  formComment: FormCommentState,
}

interface ThunkExtraArg {
  navigate?: NavigateFunction,
  toForm?: (obj: { [key: string]: any } | undefined) => FormData,
}

export type {StateSchema, ThunkExtraArg}