import Item from "@/components/Item";

describe("<Item>", () => {
  const USA_CURRENCY = "USD";
  const ARG_CURRENCY = "ARS";

  let item = {
    id: "MLA1146682890",
    title: "Casa 4 Ambientes · Estudio · Terraza · 146 M2 · Villa Del Parque",
    free_shipping: false,
    picture: "http://http2.mlstatic.com/D_602802-MLA50709688435_072022-I.jpg",
    condition: "used",
    address: "Capital Federal",
    price: {
      amount: 189000,
      currency: undefined,
    },
  };

  beforeEach(() => {});

  it("render correct content", () => {
    cy.mount(<Item item={item} />);
    cy.contains(item.title);
    cy.contains(item.address);
    cy.get("img:first")
      .should("have.attr", "src")
      .should(
        "include",
        "/_next/image?url=http%3A%2F%2Fhttp2.mlstatic.com%2FD_602802-MLA50709688435_072022-I.jpg&w=3840&q=75"
      );
  });

  it("render content with ARS currency", () => {
    item.price.currency = ARG_CURRENCY;
    cy.mount(<Item item={item} />);
    cy.contains("$ 189.000");
  });

  it("render content with USD currency", () => {
    item.price.currency = USA_CURRENCY;
    cy.mount(<Item item={item} />);
    cy.contains("U$S 189.000");
  });

  it("render content with unknow currency", () => {
    item.price.currency = "unknow";
    cy.mount(<Item item={item} />);
    cy.contains("$ 189.000");
  });

  it("show shipping icon if item has free shiping", () => {
    item.free_shipping = true;
    cy.mount(<Item item={item} />);
    cy.get("div[data-test-id='shipping-icon'] img:first").should("be.visible");
  });

  it("show shipping icon if item has not free shiping", () => {
    item.free_shipping = false;
    cy.mount(<Item item={item} />);
    cy.get("div[data-test-id='shipping-icon'] img:first").should("not.exist");
  });
});
