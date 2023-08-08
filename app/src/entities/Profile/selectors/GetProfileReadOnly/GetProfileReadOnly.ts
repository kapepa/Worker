import {createSelector} from "@reduxjs/toolkit";
import {GetProfile} from "../GetProfile/GetProfile";
import {ProfileState} from "../../model/types/profileState";

const GetProfileReadOnly = createSelector(
  GetProfile,
  (state: ProfileState) => state.readonly
)

export {GetProfileReadOnly}