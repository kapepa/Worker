import {createSelector} from "@reduxjs/toolkit";
import {GetProfile} from "../GetProfile/GetProfile";
import {ProfileState} from "../../model/types/profileState";

const GetProfileData = createSelector(
  GetProfile,
  (state: ProfileState) => state.data
);

export {GetProfileData};