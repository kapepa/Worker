import {Profile} from "./Profile";
import ComponentRender from "../../../shared/test/componentRender";
import {ProfileTypes} from "../../../entities/Profile";
import UserJSON from "../../../shared/test/mock/user.json";
import {UsersState} from "../../../entities/Users";
import {fireEvent} from "@testing-library/react";

describe("<Profile/>", () => {
  const mockUser: ProfileTypes = UserJSON as ProfileTypes;

  test("should be edit", () => {
    const {getByTestId} = ComponentRender(
      <Profile/>,
      {
        reloadedState: {
          profile: { data: mockUser, edit: mockUser }
        }
      }
    );

    expect(getByTestId("profile-card")).toBeInTheDocument();
    expect(getByTestId("profile-header")).toBeInTheDocument();
  })

  test("should be loading", () => {
    const {getByTestId} = ComponentRender(
      <Profile/>,
      {
        reloadedState: {
          profile: { data: undefined, edit: undefined, loading: true }
        }
      }
    );

    expect(getByTestId("loader")).toBeInTheDocument();
  })

  test("should be error", () => {
    const {getByTestId} = ComponentRender(
      <Profile/>,
      {
        reloadedState: {
          profile: { data: mockUser, edit: mockUser, loading: false, error: "error-profile" }
        }
      }
    );

    expect(getByTestId("error")).toBeInTheDocument();
  })

  test("should be display value", () => {
    const {getByDisplayValue, debug} = ComponentRender(
      <Profile/>,
      {
        reloadedState: {
          profile: { data: mockUser, edit: mockUser, loading: false, error: undefined }
        }
      }
    );

    expect(getByDisplayValue(UserJSON.firstname)).toBeInTheDocument();
    expect(getByDisplayValue(UserJSON.lastname)).toBeInTheDocument();
    expect(getByDisplayValue(UserJSON.username)).toBeInTheDocument();
    expect(getByDisplayValue(UserJSON.country)).toBeInTheDocument();
    expect(getByDisplayValue(UserJSON.city)).toBeInTheDocument();
  })

  test("should be change value", () => {
    const firstnameMock: string = "NewFirstname";
    const {getByDisplayValue, getByText, debug} = ComponentRender(
      <Profile/>,
      {
        reloadedState: {
          profile: { data: mockUser, edit: mockUser, loading: false, error: undefined, readonly: true },
          users: { profile: mockUser, loading: false, error: undefined  } as UsersState
        }
      }
    );

    fireEvent.click(getByText("Edit"));
    fireEvent.change(
      getByDisplayValue(UserJSON.firstname),
      {target: {value: firstnameMock}}
    )
    expect(getByDisplayValue(firstnameMock)).toBeInTheDocument();
  })

  test("should be cancel", () => {
    const {getByText} = ComponentRender(
      <Profile/>,
      {
        reloadedState: {
          profile: { data: mockUser, edit: mockUser, loading: false, error: undefined, readonly: true },
          users: { profile: mockUser, loading: false, error: undefined  } as UsersState
        }
      }
    );

    fireEvent.click(getByText("Edit"));
    fireEvent.click(getByText("Cancel"));

    expect(getByText("Edit")).toBeInTheDocument();
  })
})