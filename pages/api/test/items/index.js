import getItemsTest from "middlewares/getItemsTest.js";

export default async function handler(req, res) {
  try {
    res.status(200).json(getItemsTest(req.query.q));
  } catch (error) {
    res.status(404).json({ status: false, message: error.message });
  }
}
