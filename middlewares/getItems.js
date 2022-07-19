export default async function getItems(queryString) {
    const apiResponse = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${queryString}`)
    const data = await apiResponse.json()
    return mapItems(data)
}


function mapItems({ results }) {
    const mappedItems = getMappedItems(results)
    const categoryId = getMostPopularCategoryId(results)
    return { items: mappedItems, category: categoryId };
}

function getMappedItems(results) {
    return results.slice(0, 4).map(item => mapItem(item))
}

function mapItem(item) {
    const { id, title, price, currency_id, shipping, thumbnail, condition, address } = item
    const { free_shipping } = shipping
    const { state_name } = address
    return {
        id: id,
        title: title,
        free_shipping: free_shipping,
        picture: thumbnail,
        condition: condition,
        address: state_name,
        price: {
            amount: Number(price.toString().split('.')[0]),  //Get value before decimal
            currency: currency_id,
            decimals: price.toString().split('.')[1] //Get decimals
        }
    }
}

//Get the most popular category id of MLA search api by query string
function getMostPopularCategoryId(results) {
    const map = {}
    results.map(item => item.category_id)
    .forEach(aCategory => map[aCategory] = map[aCategory] == undefined ? 1 : map[aCategory] + 1)
    let [categoryId] = Object.entries(map).sort((entryA, entryB) => entryB[1] - entryA[1])[0]
    return categoryId
}


