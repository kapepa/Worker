import {User} from "../../helper/user";

describe("Profile edit", () => {
  const {profile, createUser, deleteUser } = User;

  before(function () {
    createUser()
  })

  after(function () {
    deleteUser()
  })

  it("edit", () => {

  })
})