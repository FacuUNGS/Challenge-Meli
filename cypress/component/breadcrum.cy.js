import Breadcrumb from "@/components/Breadcrumb";

describe("<Breadcrumb>", () => {
  it("render content", () => {
    const categoriesMock = [
      "Hogar",
      "Muebles y Jardín",
      "Cuidado del Hogar y Lavandería",
    ];
    cy.mount(<Breadcrumb categories={categoriesMock} />);
    categoriesMock.forEach((category) => cy.contains(category));
  });
});
