export default async function addCategories( search ) {
    const apiResponse = await fetch(`https://api.mercadolibre.com/categories/${search.category}`)
    const data = await apiResponse.json()
    if(data.error){ throw new Error(data.error) }
    return setCategories(search, data)
}

function setCategories(search, data) {
    search.category = undefined
    search.categories = mapCategories(data)
    return search
}

function mapCategories({ path_from_root }) {
    return path_from_root.map(({name}) => name)
}
