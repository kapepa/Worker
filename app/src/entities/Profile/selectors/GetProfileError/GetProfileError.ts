import {createSelector} from "@reduxjs/toolkit";
import {GetProfile} from "../GetProfile/GetProfile";
import {ProfileState} from "../../model/types/profileState";

const GetProfileError = createSelector(
  GetProfile,
  (state: ProfileState) => state.error
)

export {GetProfileError};