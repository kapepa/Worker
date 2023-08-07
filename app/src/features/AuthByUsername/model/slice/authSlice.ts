import {createSlice, Reducer} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {AuthState} from "../types/AuthState";
import {LoginByUser} from "../services/loginByUser/loginByUser";

const initialState: AuthState = {
  loading: false,
  login: {
    email: "",
    username: "",
    password: "",
  },
  token: undefined,
  error: undefined,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setEmail(state, action: PayloadAction<string>) {
      state.login.email = action.payload;
    },
    setUsername(state, action: PayloadAction<string>) {
      state.login.username = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.login.password = action.payload;
    },
    cleanLogin(state) {
      state.login = {email: "", username: "", password: ""};
    },
    cleanToken(state) {
      state.token = undefined;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginByUser.pending, (state) => {
        state.error = undefined;
        state.loading = true;
      })
      .addCase(LoginByUser.fulfilled, (state, action: PayloadAction<{access_token: string}>) => {
        state.token = action.payload.access_token;
        state.loading = false;
      })
      .addCase(LoginByUser.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
  }
})

const AuthActions = AuthSlice.actions;
const AuthReducer: Reducer = AuthSlice.reducer;

export {AuthActions, AuthReducer};