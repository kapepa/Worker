import {profileMock} from "../../support/user";

describe("Details", () => {
  before(function () {
    cy.loginByAuthApi({ email: profileMock.email, password: profileMock.password })

  })

  beforeEach(function () {
    // cy.visit(`/`);
  })
})