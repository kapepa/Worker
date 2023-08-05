import {UsersTypes} from "./usersTypes";

export interface UsersState{
  loading: boolean,
  profile?: UsersTypes,
  error?: string | undefined,
}