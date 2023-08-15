import {createSlice, PayloadAction, Reducer} from "@reduxjs/toolkit";
import {ProfileState} from "../types/profileState";
import {ProfileRequest} from "../../services/ProfileRequest/ProfileRequest";
import {ProfileTypes} from "../types/profileTypes";
import {ProfileUpdate} from "../../services/ProfileUpdate/ProfileUpdate";

const initialState: ProfileState = {
  loading: false,
  data: undefined,
  edit: undefined,
  error: undefined,
  readonly: true,
}

const ProfileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    cleanUsers(state) {
      state.data = undefined;
    },
    SetReadonly(state: ProfileState, action: PayloadAction<boolean>) {
      state.readonly = action.payload;
    },
    CancelEdit(state: ProfileState) {
      state.readonly = !state.readonly;
      state.edit = state.data;
    },
    ProfileSetEdit(state: ProfileState, action: PayloadAction<ProfileTypes>) {
      state.edit = {...state.edit, ...action.payload};
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
        state.edit = action.payload;
      })
      .addCase(ProfileRequest.rejected, (state: ProfileState, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(ProfileUpdate.pending, (state: ProfileState) => {
        state.loading = true;
      })
      .addCase(ProfileUpdate.fulfilled, (state: ProfileState, action: PayloadAction<ProfileTypes>) => {
        state.loading = false;
        state.data = action.payload;
        state.edit = action.payload;
        state.readonly = !state.readonly;
      })
      .addCase(ProfileUpdate.rejected, (state: ProfileState, action) => {
        state.loading = false;
        state.error = action.payload
      })
  }
})

const ProfileActions = ProfileSlice.actions;
const ProfileReducer: Reducer = ProfileSlice.reducer;

export { ProfileActions, ProfileReducer }