import {createSelector} from "@reduxjs/toolkit";
import {GetProfile} from "../GetProfile/GetProfile";
import {ProfileState} from "../../model/types/profileState";

const GetProfileLoading = createSelector(
  GetProfile,
  (state: ProfileState) => state.loading,
);

export {GetProfileLoading}
