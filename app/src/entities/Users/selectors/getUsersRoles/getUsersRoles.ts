import {createSelector} from "@reduxjs/toolkit";
import {GetUsers} from "../getUsers/getUsers";
import {UsersState} from "../../model/types/usersState";

const GetUsersRoles = createSelector(
  GetUsers,
  (state: UsersState) => state.roles,
)

export {GetUsersRoles};