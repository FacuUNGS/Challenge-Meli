export default function getItemsTest(querySearch) {
  if (querySearch !== ":Comida") {
    throw new Error("Not Found");
  }
  return {
    items: [
      {
        id: "MLA935384196",
        title: "Ramen Nissin Verdura 85 Gr. Fideos En 3 Minutos",
        free_shipping: false,
        picture:
          "http://http2.mlstatic.com/D_903389-MLA47191254442_082021-I.jpg",
        condition: "new",
        address: "Capital Federal",
        price: {
          amount: 223,
          currency: "ARS",
        },
      },
      {
        id: "MLA935528735",
        title: "Fideos Cup Noodles Nissin Verdura 67 Gr.",
        free_shipping: false,
        picture:
          "http://http2.mlstatic.com/D_848431-MLA47205502774_082021-I.jpg",
        condition: "new",
        address: "Capital Federal",
        price: {
          amount: 409,
          currency: "ARS",
        },
      },
      {
        id: "MLA922795634",
        title: "Puré De Papa Knorr X 125 G",
        free_shipping: false,
        picture:
          "http://http2.mlstatic.com/D_843673-MLA46193750395_052021-I.jpg",
        condition: "new",
        address: "Buenos Aires",
        price: {
          amount: 144,
          currency: "ARS",
        },
      },
      {
        id: "MLA862406470",
        title: "Set De Comidas Petit Gourmet Lionels Original",
        free_shipping: false,
        picture:
          "http://http2.mlstatic.com/D_678176-MLA49074638129_022022-I.jpg",
        condition: "new",
        address: "Capital Federal",
        price: {
          amount: 1348,
          currency: "ARS",
        },
      },
    ],
    categories: [
      "Alimentos y Bebidas",
      "Almacén",
      "Alimentos Instantáneos",
      "Fideos Instantáneos",
    ],
    author: {
      name: "Facundo",
      lastname: "Ruiz",
    },
  };
}
