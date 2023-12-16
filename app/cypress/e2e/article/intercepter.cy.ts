import {profileMock} from "../../support/user";

describe("intercept", () => {

  before(() => {
    cy.loginByAuthApi({ email: profileMock.email, password: profileMock.password })
  })

  it("article", () => {
    cy.intercept('GET', `/api/articles/receive/art/*`, {fixture: "articles.json"}).as("articles");
    cy.intercept('GET', `/api/articles/rating/1`, {fixture: "rating.json"}).as("rating");
    cy.intercept('GET', `/api/comments/receive/1?take=8&skip=0`, {fixture: "comments.json"}).as("comment");

    cy.visit(`/article/1`)

    cy.wait('@articles')
    cy.wait('@rating')
    cy.wait('@comment')
  })
})