import {createSlice, Reducer} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {UsersState} from "../types/usersState";
import {MyselfUsers} from "../../services/MyselfUsers/MyselfUsers";
import {UsersTypes} from "../types/usersTypes";
import {Role} from "../enum/roleEnum";

const initialState: UsersState = {
  loading: false,
  profile: undefined,
  roles: {
    [Role.ADMIN]: false,
    [Role.MANAGER]: false,
    [Role.USER]: false,
  },
  error: undefined,
}

export const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    cleanUsers(state) {
      state.profile = undefined;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(MyselfUsers.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(MyselfUsers.fulfilled, (state, action: PayloadAction<UsersTypes>) => {
        state.loading = false;
        state.profile = action.payload;
        action.payload.roles?.forEach((role: Role) => state.roles[role] = true);
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