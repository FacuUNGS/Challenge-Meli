describe("Initial render", () => {
  it("Front page can be open", () => {
    cy.visit("http://localhost:3000");
    cy.get('input[placeholder="Nunca dejes de buscar"]');
  });
});

describe("Do search", () => {
  it("Do correct search with an existing product", () => {
    cy.doSearch("Comida");
    cy.url().should("eq", "http://localhost:3000/items?search=Comida");
    cy.contains(
      "Alimentos y Bebidas > Almacén > Alimentos Instantáneos > Fideos Instantáneos"
    );
    cy.contains("Ramen Nissin Verdura 85 Gr. Fideos En 3 Minutos");
    cy.contains("Fideos Cup Noodles Nissin Verdura 67 Gr.");
    cy.contains("Puré De Papa Knorr X 125 G");
    cy.contains("Set De Comidas Petit Gourmet Lionels Original");
  });
});

describe("When a search has already been done", () => {
  beforeEach(() => {
    cy.doSearch("Comida");
    cy.get('div[data-test-id="list-item"] a:first').click();
    cy.url().should("eq", "http://localhost:3000/items/MLA935384196");
  });

  it("Open the detail of product", () => {
    cy.contains(
      "Alimentos y Bebidas > Almacén > Alimentos Instantáneos > Fideos Instantáneos"
    );
    cy.contains("Ramen Nissin Verdura 85 Gr. Fideos En 3 Minutos");
    cy.contains("Comprar");
    cy.contains("$ 223");
    cy.contains("Nuevo - 500 vendidos");
    cy.contains("Descripción del producto");
    cy.get("img:first")
      .should("have.attr", "src")
      .should(
        "include",
        "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2748%27%20height=%2735%27/%3e"
      );
  });

  it("Change the id in the url to a non-existing id", () => {
    cy.visit("http://localhost:3000/items/test-url");
    cy.get('div[data-testid="list-item"]').should("not.exist");
  });
});

describe("Handler incorrect paths", () => {
  it("Search with a unknow parameter", () => {
    cy.doSearch("****");
    cy.get('div[data-testid="list-item"]').should("not.exist");
  });
});
