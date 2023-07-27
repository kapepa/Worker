import {createAsyncThunk} from "@reduxjs/toolkit";
import {LoginTypes} from "../../types/loginTypes";
import {Axios} from "../../../../../utils/axios";

const LoginByUser = createAsyncThunk<string, LoginTypes, { rejectValue: string }>(
  'login/LoginByUser',
  async (data: LoginTypes, { rejectWithValue }) => {
    try {
      const response = await Axios.post("/api/auth/login", data)
      if (!response.data) throw new Error("Error login!");
      return response.data;
    } catch (e) {
      return rejectWithValue("error-login");
    }
  }
)

export {LoginByUser}