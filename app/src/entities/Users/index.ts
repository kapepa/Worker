import {UsersActions, UsersReducer} from "./model/slice/usersSlice";
import {UsersState} from "./model/types/usersState";
import {GetUsers} from "./selectors/getUsers/getUsers";
import {UsersTypes} from "./model/types/usersTypes";

export {UsersReducer, GetUsers, UsersActions};
export type {UsersState, UsersTypes};