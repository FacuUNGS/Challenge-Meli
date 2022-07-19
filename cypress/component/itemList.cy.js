import ItemList from "@/components/ItemList";

describe("<ItemList>", () => {
  const items = [
    {
      id: "MLA731813867",
      title: "Libro De Animales A Dioses - Yuval Noah Harari",
      free_shipping: true,
      picture: "http://http2.mlstatic.com/D_732545-MLA29486010249_022019-I.jpg",
      condition: "new",
      address: "Buenos Aires",
      price: {
        amount: 4145,
        currency: "ARS",
      },
    },
    {
      id: "MLA742167450",
      title: "Saga Completa Harry Potter (7 Libros) - J. K. Rowling",
      free_shipping: true,
      picture: "http://http2.mlstatic.com/D_706138-MLA44164216624_112020-I.jpg",
      condition: "new",
      address: "Buenos Aires",
      price: {
        amount: 14849,
        currency: "ARS",
      },
    },
    {
      id: "MLA747193479",
      title: "Libro El Método Lean Startup - Eric Ries - Hay Stock",
      free_shipping: false,
      picture: "http://http2.mlstatic.com/D_614253-MLA31045058153_062019-I.jpg",
      condition: "new",
      address: "Buenos Aires",
      price: {
        amount: 3132,
        currency: "ARS",
      },
    },
    {
      id: "MLA883625883",
      title: "Libro Ux Writing En Español. El Abc De La Disciplina Con Ñ. ",
      free_shipping: false,
      picture: "http://http2.mlstatic.com/D_663054-MLA43746061878_102020-I.jpg",
      condition: "new",
      address: "Buenos Aires",
      price: {
        amount: 3999,
        currency: "ARS",
      },
    },
  ];

  beforeEach(() => {
    cy.mount(<ItemList items={items} />);
  });

  it("render 4 items", () => {
    cy.get("[data-test-id='list-item']").children().should("have.length", 4);
  });

  it("items has the correct url", () => {
    items.forEach((item, index) => {
      cy.get(`a[data-test-id='anchor-${index}']`).should(
        "have.attr",
        "href",
        `/items/${item.id}`
      );
    });
  });
});
