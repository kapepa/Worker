import {ProfileActions, ProfileReducer} from "./profileSlice";
import {ProfileTypes} from "../types/profileTypes";
import {ProfileState} from "../types/profileState";
import {ProfileRequest} from "../../services/ProfileRequest/ProfileRequest";
import {DeepPartial} from "@reduxjs/toolkit";
import {ThunkExtraArg} from "../../../../app/providers/Store/config/StateSchema";
import {ProfileUpdate} from "../../services/ProfileUpdate/ProfileUpdate";

describe("ProfileSlice", () => {
  const mockState: ProfileState = { loading: false, data: undefined, edit: undefined, error: undefined, readonly: false };
  const mockProfile: ProfileTypes = {id: "MyID", email: "mock@mail.com"};

  test("cleanUsers", () => {
    expect(ProfileReducer({...mockState, data: mockProfile}, ProfileActions.cleanUsers())).toEqual(mockState);
  })

  test("SetReadonly", () => {
    expect(ProfileReducer(mockState, ProfileActions.SetReadonly(true))).toEqual({...mockState, readonly: true})
  })

  test("CancelEdit", () => {
    expect(ProfileReducer({...mockState, edit: mockProfile}, ProfileActions.CancelEdit())).toEqual({...mockState, readonly: true})
  })

  test("ProfileSetEdit", () => {
    const mockPayload = { firstname: "MyFirstname" };
    expect(ProfileReducer({...mockState, edit: mockProfile}, ProfileActions.ProfileSetEdit(mockPayload)))
      .toEqual({...mockState, edit: {...mockProfile, ...mockPayload}});
  })

  test("ProfileRequest pending", () => {
    const state: DeepPartial<ProfileState> = { loading: false };

    expect(ProfileReducer(state as ProfileState, ProfileRequest.pending))
      .toEqual({loading: true})
  })

  test("ProfileRequest fulfilled", () => {
    const state: DeepPartial<ProfileState> = mockState;

    expect(ProfileReducer(state as ProfileState, ProfileRequest.fulfilled(mockProfile, "", undefined)))
      .toEqual({ ...mockState, data: mockProfile, edit: mockProfile });
  })


  test("ProfileUpdate pending", () => {
    const state: DeepPartial<ProfileState> = { loading: false };

    expect(ProfileReducer(state as ProfileState, ProfileUpdate.pending))
      .toEqual({loading: true})
  })

  test("ProfileUpdate fulfilled", () => {
    const state: DeepPartial<ProfileState> = mockState;

    expect(ProfileReducer(state as ProfileState, ProfileUpdate.fulfilled(mockProfile, "", undefined)))
      .toEqual({ ...mockState, data: mockProfile, edit: mockProfile, readonly: true });
  })
})