import {createSelector} from "@reduxjs/toolkit";
import {GetProfile} from "../GetProfile/GetProfile";
import {ProfileState} from "../../model/types/profileState";

const GetProfileEdit = createSelector(
  GetProfile,
  (state: ProfileState) => state.edit
)

export {GetProfileEdit};