import {UsersTypes} from "./usersTypes";

export interface UsersState{
  loading: boolean,
  profile?: UsersTypes | undefined,
  error?: string | undefined,
}