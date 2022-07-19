import Header from "@/components/Header";

describe("<Header>", () => {
  it("do Submit", () => {
    cy.mount(<Header />);
    cy.get("input[placeholder='Nunca dejes de buscar']").type(
      "Electrodomesticos"
    );
    cy.get("img:first")
      .should("have.attr", "src")
      .should(
        "include",
        "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2748%27%20height=%2735%27/%3e"
      );
    cy.get("form").submit();
  });
});
