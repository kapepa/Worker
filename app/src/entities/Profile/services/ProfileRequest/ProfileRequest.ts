import {createAsyncThunk} from "@reduxjs/toolkit";
import {ProfileTypes} from "../../model/types/profileTypes";
import Axios from "../../../../utils/axios";
import {ThunkExtraArg} from "../../../../app/providers/Store/config/StateSchema";
import {RouterPath} from "../../../../shared/const/Routers";

const ProfileRequest = createAsyncThunk<ProfileTypes, undefined, { rejectValue: string, extra: ThunkExtraArg }>(
  'profile/ProfileRequest',
  async (data, { rejectWithValue, extra }) => {
    try {
      const response = await Axios.get<ProfileTypes>("/api/users/profile-full");
      if (!response.data) throw new Error("error-profile");
      return response.data;
    } catch (e) {
      if(extra.navigate) extra.navigate(RouterPath.HOME);
      return rejectWithValue("error-profile");
    }
  }
)

export {ProfileRequest};