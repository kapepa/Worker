import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {AuthState} from "../types/AuthState";
import {LoginByUser} from "../services/loginByUser/loginByUser";
import {LoginTypes} from "../types/loginTypes";

const initialState: AuthState = {
  loading: false,
  login: {
    username: "",
    password: "",
  },
  error: undefined,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.login.username = action.payload;
      return state;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.login.password = action.payload;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginByUser.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(LoginByUser.fulfilled, (state, action: PayloadAction<LoginTypes>) => {
        state.login = action.payload;
        state.loading = false;
      })
      .addCase(LoginByUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
  }
})

const AuthActions = AuthSlice.actions;
const AuthReducer = AuthSlice.reducer;

export {AuthActions, AuthReducer};