import {createAsyncThunk} from "@reduxjs/toolkit";
import {UsersTypes} from "../../model/types/usersTypes";
import Axios from "../../../../utils/axios";

const MyselfUsers = createAsyncThunk<UsersTypes, undefined, { rejectValue: string }>(
  'users/MyselfUsers',
  async (data, { rejectWithValue }) => {
    try {
      const response = await Axios.get("/api/users/profile")
      if (!response.data) throw new Error("error-user");
      return response.data;
    } catch (e) {
      return rejectWithValue("error-user");
    }
  }
)

export {MyselfUsers};