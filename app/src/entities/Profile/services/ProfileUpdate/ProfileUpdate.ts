import {createAsyncThunk} from "@reduxjs/toolkit";
import {ProfileTypes} from "../../model/types/profileTypes";
import {StateSchema, ThunkExtraArg} from "../../../../app/providers/Store/config/StateSchema";
import Axios from "../../../../utils/axios";

const ProfileUpdate = createAsyncThunk<ProfileTypes, undefined, { rejectValue: string, extra: ThunkExtraArg, state: StateSchema }>(
  'profile/ProfileUpdate',
  async (data: undefined, {rejectWithValue, extra, getState}) => {
    const { profile } = getState();

    try {
      const result = await Axios.put<ProfileTypes>("/api/users/update", profile.edit);

      return result.data;
    } catch (e) {
      return rejectWithValue("error-profile-update")
    }
  }
)

export {ProfileUpdate};