import addAuthor from "middlewares/addAuthor";
import addCategories from "middlewares/addCategories.js";
import addDescription from "middlewares/addDescription.js";
import getItem from "middlewares/getItem.js";

export default async function handler(req, res) {
  try {
    let post = await getItem(req.query.id);
    await addDescription(post);
    await addCategories(post);
    addAuthor(post);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ status: false, message: error.message });
  }
}
