import {createAsyncThunk} from "@reduxjs/toolkit";
import {ProfileTypes} from "../../model/types/profileTypes";
import Axios from "../../../../utils/axios";

const ProfileRequest = createAsyncThunk<ProfileTypes, undefined, { rejectValue: string }>(
  'profile/ProfileRequest',
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.get("/api/users/profile-full");
      if (!response.data) throw new Error("error-profile");
      return response.data;
    } catch (e) {
      return rejectWithValue("error-profile");
    }
  }
)

export {ProfileRequest};