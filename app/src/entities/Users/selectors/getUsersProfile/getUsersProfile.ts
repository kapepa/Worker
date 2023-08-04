import {createSelector} from "@reduxjs/toolkit";
import {GetUsers} from "../getUsers/getUsers";
import {UsersState} from "../../model/types/usersState";

const GetUsersProfile = createSelector(
  GetUsers,
  (state: UsersState) => state.profile,
)

export {GetUsersProfile}