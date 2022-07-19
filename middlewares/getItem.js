export default async function getItems(id) {
    const apiResponse = await fetch(`https://api.mercadolibre.com/items/${id}`)
    const data = await apiResponse.json()
    if(data.error){ throw new Error(data.error) }
    return mapItem(data)
}

function mapItem(data) {
    const { id, title, price, currency_id, condition, shipping, sold_quantity, pictures, category_id } = data
    const [fisrtPic] = pictures
    const { url } = fisrtPic
    return {
        item: {
            id: id,
            title: title,
            sold_quantity: sold_quantity,
            picture: url,
            condition: condition,
            free_shipping: Boolean(shipping),
            price: {
                currency: currency_id, //Get value before decimal,
                amount: Number(price.toString().split('.')[0]), //Get value before decimal,
                decimals:  getDecimalsFormat(price.toString().split('.')[1])  //Get decimals
            }
        },
        category: category_id,
        author: {
            name: "Facundo",
            lastname: "Ruiz"
        }
    }
}

function getDecimalsFormat(number) {
    number = number ?? 0
    const formatText = {
        undefined: "00",
        1: "0"+number,
        2: number
    }
    return formatText[number.length] || number.slice(0,2)
}
