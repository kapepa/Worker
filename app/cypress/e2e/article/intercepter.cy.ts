import {profileMock} from "../../support/user";

describe("intercept", () => {

  beforeEach(() => {
    window.localStorage.setItem("token", "SomeToken");
    cy.intercept('GET', `/api/users/profile`, {fixture: "user.json"})
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