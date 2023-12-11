import {Role, UsersTypes} from "../../src/entities/Users";
import {Countries} from "../../src/shared/const/Countries";
import config from "../../src/config";

// const User = function () {
//   let UserMock: UsersTypes = {
//     id: "",
//     username: "UsernameTest",
//     firstname: "FirstnameTest",
//     lastname: "LastnameTest",
//     email: "email@test.com",
//     password: "123456",
//     roles: [ Role.ADMIN, Role.MANAGER, Role.USER],
//     country: Countries.USA,
//     city: "CityTest",
//   }
//
//   const getUser = () => {
//     return cy.getByAuthApi().then((body: UsersTypes) => {
//       UserMock = Object.assign(UserMock, body);
//     })
//   }
//
//   const loginUser = () => {
//     return cy.loginByAuthApi({email: UserMock.email, password: UserMock.password}).then(() => {
//       getUser();
//     })
//   }
//   const createUser = () => {
//     return cy.createUserApi(UserMock).then(() => {
//       loginUser();
//     })
//   }
//
//   const deleteUser = () => {
//     return cy.deleteByAuthApi(UserMock.id)
//   }
//
//   return {
//     createUser: createUser,
//     deleteUser: deleteUser,
//     user: UserMock
//   }
// }

const User = {
  token: "",
  profile: {
    id: "",
    username: "UsernameTest",
    firstname: "FirstnameTest",
    lastname: "LastnameTest",
    email: "email@test.com",
    password: "123456",
    roles: [ Role.ADMIN, Role.MANAGER, Role.USER],
    country: Countries.USA,
    city: "CityTest",
  },
  getUser: async function () {
    const profile = User.profile;
    return await fetch(
      `${config.api}/api/users/profile`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${User.token}`,
        }
      }
    ).then((res: Response) => res.json()).then((res) => {
      User.profile = Object.assign(User.profile, res.body)
    })
  },
  loginUser: async function () {
    const profile = User.profile;
    return await fetch(
      `${config.api}/api/auth/login`,
      {
        method: "POST",
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({email: profile.email, password: profile.password}),
      }
    ).then((res: Response) => res.json()).then((res) => {
      User.token = res.body.access_token;
      return User.getUser();
    })
  },
  createUser: async function () {
    const {id, ...other} = User.profile
    const body = JSON.stringify(other)
    return await fetch(
      `${config.api}/api/auth/sign-up`,
      {
        method: "POST",
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body
      }
    ).then((res: Response) => {
      return User.loginUser()
    })
  },
  deleteUser: async function () {
    const profile = User.profile;
    return await fetch(
      `${config.api}/api/users/delete/${profile.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${User.token}`,
        }
      }
    )
  }
}

export {User}