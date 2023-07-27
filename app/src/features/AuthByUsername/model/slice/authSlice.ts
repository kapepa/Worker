import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {AuthState} from "../types/AuthState";
import {LoginByUser} from "../services/loginByUser/loginByUser";

const initialState: AuthState = {
  loading: false,
  login: {
    username: "admin",
    password: "123456",
  },
  token: undefined,
  error: undefined,
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername(state, action: PayloadAction<string>) {
      state.login.username = action.payload;
    },
    setPassword(state, action: PayloadAction<string>) {
      state.login.password = action.payload;
    },
    cleanLogin(state) {
      state.login = {username: "", password: ""};
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
      .addCase(LoginByUser.fulfilled, (state, action: PayloadAction<string>) => {
        state.token = action.payload;
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