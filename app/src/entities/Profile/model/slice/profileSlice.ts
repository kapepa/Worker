import {createSlice, PayloadAction, Reducer} from "@reduxjs/toolkit";
import {ProfileState} from "../types/profileState";
import {ProfileRequest} from "../../services/ProfileRequest/ProfileRequest";
import {ProfileTypes} from "../types/profileTypes";

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
  extraReducers: (builder) => {
    builder
      .addCase(ProfileRequest.pending, (state: ProfileState) => {
        state.loading = true;
      })
      .addCase(ProfileRequest.fulfilled, (state: ProfileState, action: PayloadAction<ProfileTypes>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(ProfileRequest.rejected, (state: ProfileState, action) => {
        state.loading = false;
        state.error = action.payload;
      })

  }
})

const ProfileActions = ProfileSlice.actions;
const ProfileReducer: Reducer = ProfileSlice.reducer;

export { ProfileActions, ProfileReducer }