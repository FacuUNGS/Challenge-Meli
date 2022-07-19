Cypress.Commands.add("doSearch", (search) => {
  cy.visit("http://localhost:3000");
  cy.get('input[placeholder="Nunca dejes de buscar"]').type(search);
  cy.get("input[type=submit]").click();
});
