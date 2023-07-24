import {createSlice} from '@reduxjs/toolkit'
// import type {PayloadAction} from '@reduxjs/toolkit'
import {UsersState} from "../types/usersState";

const initialState: UsersState = {
  loading: false,
  data: undefined,
}

export const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

const UsersActions = UsersSlice.actions;
const UsersReducer = UsersSlice.reducer;

export {UsersReducer, UsersActions};