import {UsersTypes} from "./usersTypes";
import {Role} from "../enum/roleEnum";

export interface UsersState{
  loading: boolean,
  profile?: UsersTypes | undefined,
  roles: {
    [Role.ADMIN]: boolean,
    [Role.MANAGER]: boolean,
    [Role.USER]: boolean,
  }
  error?: string | undefined,
}