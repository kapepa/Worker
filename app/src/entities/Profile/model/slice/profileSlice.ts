import {createSlice, Reducer} from "@reduxjs/toolkit";
import {ProfileState} from "../types/profileState";

const initialState: ProfileState = {
  loading: false,
  data: undefined,
  error: undefined,
}

const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    cleanUsers(state) {
      state.data = undefined;
    }
  },
  extraReducers: {}
})

const ProfileActions = ProfileSlice.actions;
const ProfileReducer: Reducer = ProfileSlice.reducer;

export { ProfileActions, ProfileReducer }