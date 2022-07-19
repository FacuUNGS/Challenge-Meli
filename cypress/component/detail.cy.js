import Detail from "@/components/Detail";

describe("<Detail>", () => {
  const USA_CURRENCY = "USD";
  const ARG_CURRENCY = "ARS";

  let item = {
    id: "MLA919970533",
    title: "iPod Touch 32gb - Silver",
    sold_quantity: 50,
    picture: "http://http2.mlstatic.com/D_955930-MLA45878166410_052021-O.jpg",
    condition: "new",
    free_shipping: true,
    description: "El nuevo iPod touch. Diversión a la máxima potencia.",
    price: {
      currency: undefined,
      amount: "42999",
      decimals: "01",
    },
  };

  it("render content", () => {
    cy.mount(<Detail item={item} />);
    cy.contains(item.title);
    cy.contains(`Nuevo - ${item.sold_quantity} vendidos`);
    cy.contains("Comprar");
    cy.contains("01");
    cy.contains(item.description);
    cy.contains("Descripción del producto")
    cy.get("img:first")
      .should("have.attr", "src")
      .should(
        "include",
        "/_next/image?url=http%3A%2F%2Fhttp2.mlstatic.com%2FD_955930-MLA45878166410_052021-O.jpg&w=3840&q=75"
      );
  });

  it("render content with ARS currency", () => {
    item.price.currency =  ARG_CURRENCY;
    cy.mount(<Detail item={item} />);
    cy.contains(`$ ${item.price.amount}`);
  });

  it("render content with USA currency", () => {
    item.price.currency = USA_CURRENCY;
    cy.mount(<Detail item={item} />);
    cy.contains(`U$S ${item.price.amount}`);
  });

  it("render content with USA currency", () => {
    item.price.currency = "unknow";
    cy.mount(<Detail item={item} />);
    cy.contains(`$ ${item.price.amount}`);
  });
});

