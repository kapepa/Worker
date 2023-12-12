import {UsersTypes} from "../../../src/entities/Users";
import {profileMock} from "../../support/user";

describe("Profile edit", () => {
  let profile: UsersTypes;

  before(function () {
    cy.loginByAuthApi({ email: profileMock.email, password: profileMock.password }).then(() => {
      cy.getByProfileApi().then((body: UsersTypes) => {
        profile = body;
        cy.visit(`/profile/${profile.id}`);
      })
    })
  })

  afterEach(function () {
    cy.visit(`/profile/${profile.id}`);
  })

  after(() => {
    cy.updateByProfileApi(profile)
  })

  it("change value", () => {
    cy.get('.input[name="firstname"]').should("have.value", profile.firstname);
    cy.get('.input[name="lastname"]').should("have.value", profile.lastname);
    cy.get('.input[name="username"]').should("have.value", profile.username);
    cy.get('.input[name="city"]').should("have.value", profile.city);

    cy.get('.profile-header__edit').click()

    cy.get('.input[name="firstname"]').clear().type("NewFirstname");
    cy.get('.input[name="lastname"]').clear().type("NewLastname");
    cy.get('.input[name="username"]').clear().type("NewUsername");
    cy.get('.input[name="city"]').clear().type("NewCity");

    cy.get('.input[name="firstname"]').should("have.value", "NewFirstname");
    cy.get('.input[name="lastname"]').should("have.value", "NewLastname");
    cy.get('.input[name="username"]').should("have.value", "NewUsername");
    cy.get('.input[name="city"]').should("have.value", "NewCity");

    cy.get('.profile-header__submit').click()
  })

})