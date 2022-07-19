export default async function addAuthor(post) {
  post.author = {
    name: "Facundo",
    lastname: "Ruiz",
  }
  return post
}
