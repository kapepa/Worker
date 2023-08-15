import {Profile} from "./Profile";
import ComponentRender from "../../../shared/test/componentRender";
import {ProfileTypes} from "../../../entities/Profile";
import {Countries} from "../../../shared/const/Countries";

describe("<Profile/>", () => {
  let mockUser: ProfileTypes;

  beforeEach(() => {
    mockUser = {id: "MyID", firstname: "MyFirstname", lastname: "MyLastname", username: "MyUsername", country: Countries.BLR, city: "Odessa"}
  })

  test("should be edit", () => {
    const {getByTestId, debug} = ComponentRender(<Profile/>, {reloadedState: {profile: { data: mockUser, edit: mockUser }}});

    expect(getByTestId("profile-card")).toBeInTheDocument();
    expect(getByTestId("profile-header")).toBeInTheDocument();
  })

  test("should be loading", () => {
    const {getByTestId, debug} = ComponentRender(<Profile/>, {reloadedState: {profile: { data: undefined, edit: undefined, loading: true }}});

    expect(getByTestId("loader")).toBeInTheDocument();
  })

  test("should be error", () => {
    const {getByTestId} = ComponentRender(<Profile/>, {reloadedState: {profile: { data: mockUser, edit: mockUser, loading: false, error: "error-profile" }}});

    expect(getByTestId("error")).toBeInTheDocument();
  })
})