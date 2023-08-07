import {createSelector} from "@reduxjs/toolkit";
import {GetProfile} from "../GetProfile/GetProfile";
import {ProfileState} from "../../model/types/profileState";

const GetProfileAvatar = createSelector(
  GetProfile,
  (state: ProfileState) => state.data?.avatar || "",
);

export {GetProfileAvatar}