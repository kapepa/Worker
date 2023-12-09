describe('Routing', () => {
  it('Home', () => {
    cy.visit('/');
    cy.get('[data-testid=home]').should('exist')
  })
})