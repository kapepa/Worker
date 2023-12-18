describe('Routing', () => {

  describe("Is not authorized", () => {

    it('Home', () => {
      cy.visit('/');
      cy.get('[data-testid=home]').should('exist')
    })

    it('About', () => {
      cy.visit('/about');
      cy.get('[data-testid=about]').should('exist')
    })

    it('Error', () => {
      cy.visit('/not-found');
      cy.get('[data-testid=error]').should('exist')
    })

  })

  describe("Is authorized", () => {
    beforeEach(function () {
      cy.loginByAuth0Api();
    })

    it("Admin", () => {
      cy.visit('/admin');
      cy.get('[data-testid=admin]').should('exist')
    })

    it("Article", () => {
      cy.visit('/article');
      cy.get('[data-testid=article]').should('exist')
    })

    it("ArticleCreate", () => {
      cy.visit('/article-create');
      cy.get('[data-testid=article-create]').should('exist')
    })

    it("ArticleEdit", () => {
      cy.visit(`/article-edit/aed4c183-3f50-44a8-acb9-750311590502`);
      cy.get('[data-testid=article-edit]').should('exist')
    })

    it("Details", () => {
      cy.visit(`/article/aed4c183-3f50-44a8-acb9-750311590502`);
      cy.get('[data-testid=details]').should('exist')
    })

    it("Profile", () => {
      cy.visit(`/profile/305a9f74-a694-4be9-9bdb-237fd25de367`);
      cy.get('[data-testid=profile]').should('exist')
    })
  })

})
