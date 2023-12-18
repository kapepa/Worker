// cypress/support/commands.js
import {UsersTypes} from "../../src/entities/Users";
import config from "../../src/config";
import {InForm} from "../helper/inForm";

const profileMock: Partial<UsersTypes> = {
  email: "myemail@gmail.com",
  password: "123456"
}

export {profileMock}

// @ts-ignore
Cypress.Commands.add<any>(
  'createByUserApi',
  (body: UsersTypes) => {
    // @ts-ignore
    cy.request({
      method: "POST",
      url: `${config.api}/api/auth/sign-up`,
      body: body,
    }).then(({ body }) => {
      return body
    })
  }
)

// @ts-ignore
Cypress.Commands.add<any>(
  'loginByAuthApi',
  ({email, password}: {email: string, password: string}) => {
    // @ts-ignore
    cy.request({
      method: "POST",
      url: `${config.api}/api/auth/login`,
      body: {email, password},
    }).then(
      // @ts-ignore
      (res: Cypress.Response<{access_token: string}>) => {
        const token: string = res.body.access_token;
        window.localStorage.setItem("token", token)
      })
  }
)

// @ts-ignore
Cypress.Commands.add<any>(
  'deleteByAuthApi',
  (userID: string) => {
    // @ts-ignore
    cy.request({
      method: "DELETE",
      url: `${config.api}/api/users/delete/${userID}`,
    })
  }
)

// @ts-ignore
Cypress.Commands.add<any>(
  'getByProfileApi',
  () => {
    const token = window.localStorage.getItem("token");
    // @ts-ignore
    cy.request({
      method: "GET",
      url: `${config.api}/api/users/profile`,
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then(
      // @ts-ignore
      ({body}: Cypress.Response<{body: UsersTypes}>) => {
        return body;
      })
  }
)

// @ts-ignore
Cypress.Commands.add<any>(
  'updateByProfileApi',
  (profile: UsersTypes) => {
    const token = window.localStorage.getItem("token");
    const toBody = InForm(profile)
    // @ts-ignore
    cy.request({
      method: "PUT",
      url: `${config.api}/api/users/update`,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
      body: toBody
    }).then(
      // @ts-ignore
      ({body}: Cypress.Response<{body: UsersTypes}>) => {
        return body;
      })
  }
)