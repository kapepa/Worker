import {profileMock} from "../../support/user";

describe("ArticlesList", () => {
  before(function () {
    cy.loginByAuthApi({ email: profileMock.email, password: profileMock.password })
  })

  beforeEach(function () {
    cy.visit(`/article`);
  })

  it("should be list article", () => {
    cy.get('.articles-item, .articles-item--block').eq(3)
  })
})