import addAuthor from "middlewares/addAuthor";
import addCategories from "middlewares/addCategories.js";
import getItems from "middlewares/getItems.js";

export default async function handler(req, res) {
  try {
    let result = await getItems(req.query.q);
    await addCategories(result);
    addAuthor(result);
    res.status(200).json(result);
  } catch (error) {
    res.status(404).json({ status: false, message: error.message });
  }
}
