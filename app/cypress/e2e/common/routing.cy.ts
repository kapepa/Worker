describe('Routing', () => {
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
