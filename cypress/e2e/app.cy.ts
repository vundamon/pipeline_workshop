describe('Minimal App', () => {
  it('loads and greets user input', () => {
    cy.visit('/');
    cy.get('[data-testid="title"]').contains('Pipeline Workshop Demo');
    cy.get('[data-testid="greeting"]').contains('Hello!');
    cy.get('[data-testid="name-input"]').type('Grace');
    cy.get('[data-testid="greeting"]').contains('Hello, Grace!');
  });
});
