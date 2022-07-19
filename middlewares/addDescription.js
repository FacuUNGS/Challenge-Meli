export default async function addDescription(post) {
    const apiResponse = await fetch(`https://api.mercadolibre.com/items/${post.item.id}/description`)
    const data = await apiResponse.json()
    if(data.error){ throw new Error(data.error) }
    return mapItemDescription(data, post)
}

function mapItemDescription(data, post) {
    const { plain_text } = data
    post.item.description = plain_text
    return post
}