export default function getItemTest(id) {
  let post = {
    item: {
      id: "MLA935384196",
      title: "Ramen Nissin Verdura 85 Gr. Fideos En 3 Minutos",
      sold_quantity: 500,
      picture: "http://http2.mlstatic.com/D_903389-MLA47191254442_082021-O.jpg",
      condition: "new",
      free_shipping: true,
      price: {
        currency: "ARS",
        amount: 223,
        decimals: "00",
      },
      description:
        "PRODUCTO\nRamen Nissin Verdura 85 Gr. Fideos En 3 Minutos\n_________________________________________\n\n::: MEDIOS DE ENVÍO :::\n\nMERCADO ENVIOS\n» Hacemos envíos a todo el país (excepto Tierra del Fuego), a través de Mercado Envíos. El valor del envío lo podés calcular ingresando tu código postal en la parte superior de la publicación.\n» Para compras superiores a $4000 el envío es gratis, en productos seleccionados por Mercado Libre.\n» Al momento de la compra podés seleccionar dónde recibir tu paquete, (a domicilio o alguna sucursal)\n\nENVIO RAPIDO A DOMICILIO FLEX\n» Hacemos envíos en el día si tu compra se realiza antes de las 13 hs. Se entrega entre las 11 y las 20 hs. Si lo hiciste luego de esa hora el producto será entregado al siguiente día hábil, siempre dentro de los mismos horarios.\n» Siempre debe haber una persona en el domicilio hasta las 20 hs. para recibir el producto. La reprogramación de entrega tiene costo.\n\nRETIRO EN DOMICILIO VENDEDOR\n» Estamos ubicados en el barrio de Paternal, CABA.\n» Luego de realizar la compra se coordina la entrega por mensaje privado.\n» Sólo es un punto de retiro. No se realiza venta al público. \n\n_________________________________________\n\n::: MEDIOS DE PAGO :::\n\n» Mercado Pago.\n\n_________________________________________\n\n::: FACTURACIÓN :::\n\n» Contamos con FACTURACIÓN electrónica que se envía por Mercado Libre.\n» Hacemos factura B. \n» Para emisión de factura A, necesitamos que la cuenta desde donde vayas a realizar la compra, esté registrada como IVA Responsable Inscripto o IVA Exento. De lo contrario, se va a emitir automáticamente factura B.\n\n_________________________________________\n\n::: RESPONDEREMOS TUS PREGUNTAS :::\n\n• Lunes a viernes de 8 a 20 hrs.\n• Sábados de 9 a 15 hrs.\n\n\n¡ESPERAMOS TU COMPRA!",
    },
    author: {
      name: "Facundo",
      lastname: "Ruiz",
    },
    categories: [
      "Alimentos y Bebidas",
      "Almacén",
      "Alimentos Instantáneos",
      "Fideos Instantáneos",
    ],
  };
  if (id !== post.item.id) {
    throw new Error("Not Found");
  }

  return post;
}
