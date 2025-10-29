describe('Dino Fan Club', () => {
  it('loads and greets user input', () => {
    cy.visit('/');
    cy.get('[data-testid="title"]').contains('Dino Fan Club');
    cy.get('[data-testid="greeting"]').contains('Greetings, carbon-based time traveler!');
    cy.get('[data-testid="name-input"]').type('Grace');
    cy.get('[data-testid="greeting"]').contains('RAWR, Grace! Welcome to the club.');
    cy.get('[data-testid="facts"] li').its('length').should('be.gte', 1);
  });
});
