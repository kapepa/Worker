import {profileMock} from "../../support/user";

describe("article edit", () => {
  before(() => {
    cy.loginByAuthApi({ email: profileMock.email, password: profileMock.password })
  })

  it("edit", () => {
    const newTitle: string = 'Change title';
    const newSubtitle: string = 'Change subtitle'

    cy.intercept('GET', `/api/articles/edit/*`, {fixture: "articles.json"});
    cy.intercept('PATCH', `/api/articles/update`, {fixture: "articles.json"}).as("update");

    cy.visit(`/article-edit/1`);

    cy.get("[data-testid=article-edit]").should('exist');

    cy.get(".input[name=title]").clear().type(newTitle);
    cy.get(".input[name=title]").should('have.value', newTitle);

    cy.get(".input[name=subtitle]").clear().type(newSubtitle);
    cy.get(".input[name=subtitle]").should('have.value', newSubtitle);

    cy.get(".tab[name=IT]").click();
    cy.get(".tab[name=IT]").click();

    cy.get(".tab[name=SCIENCE]").click();
    cy.get(".tab[name=ECONOMICS]").click();

    cy.get(".editor-article__submit[type=submit]").click();
    cy.wait('@update')
  })
})