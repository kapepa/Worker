import {createSlice, Reducer} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {UsersState} from "../types/usersState";
import {MyselfUsers} from "../../services/MyselfUsers/MyselfUsers";
import {UsersTypes} from "../types/usersTypes";

const initialState: UsersState = {
  loading: false,
  data: undefined,
  error: undefined,
}

export const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    cleanUsers(state) {
      state.data = undefined;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(MyselfUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(MyselfUsers.fulfilled, (state, action: PayloadAction<UsersTypes>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(MyselfUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
  }
})

const UsersActions = UsersSlice.actions;
const UsersReducer: Reducer = UsersSlice.reducer;

export {UsersReducer, UsersActions};