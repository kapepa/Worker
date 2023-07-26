import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';
import {LoginTypes} from "../../types/loginTypes";
import {UsersTypes} from "../../../../../entities/Users";

const LoginByUser = createAsyncThunk<UsersTypes, LoginTypes, { rejectValue: string }>(
  'login/LoginByUser',
  async (data: LoginTypes, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", data)
      if (!response.data) throw new Error("Error login!");
      return response.data;
    } catch (e) {
      return rejectWithValue("Error login!");
    }
  }
)

export {LoginByUser}