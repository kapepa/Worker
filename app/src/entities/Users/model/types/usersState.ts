import {UsersTypes} from "./usersTypes";

export interface UsersState{
  loading: boolean,
  data?: UsersTypes,
  error?: string | undefined,
}