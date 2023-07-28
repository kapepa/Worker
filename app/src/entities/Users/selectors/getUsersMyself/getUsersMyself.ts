import {createSelector} from "@reduxjs/toolkit";
import {GetUsers} from "../getUsers/getUsers";
import {UsersState} from "../../model/types/usersState";

const GetUsersMyself = createSelector(
  GetUsers,
  (state: UsersState) => state.data,
)

export {GetUsersMyself}