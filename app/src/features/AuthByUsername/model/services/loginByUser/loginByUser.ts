import {createAsyncThunk} from "@reduxjs/toolkit";
import {LoginTypes} from "../../types/loginTypes";
import Axios from "../../../../../utils/axios";
import {ThunkExtraArg} from "../../../../../app/providers/Store/config/StateSchema";

const LoginByUser = createAsyncThunk<{access_token: string}, LoginTypes, { rejectValue: string, extra: ThunkExtraArg }>(
  'login/LoginByUser',
  async (data: LoginTypes, { rejectWithValue, extra }) => {
    try {
      const response = await Axios.post("/api/auth/login", data)
      if (!response.data) throw new Error("error-login");
      // if( extra.navigate ) extra.navigate('/profile');
      return response.data;
    } catch (e) {
      return rejectWithValue("error-login");
    }
  }
)

export {LoginByUser}