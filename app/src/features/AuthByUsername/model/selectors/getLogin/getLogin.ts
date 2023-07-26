import {createSelector} from "@reduxjs/toolkit";
import {GetAuth} from "../getAuth/getAuth";
import {AuthState} from "../../types/AuthState";

const GetLogin = createSelector(
  GetAuth,
  (state: AuthState) => state.login,
)

export {GetLogin};