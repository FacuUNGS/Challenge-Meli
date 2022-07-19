import getItemTest from "middlewares/getItemTest";

export default async function handler(req, res) {
  try {
    res.status(200).json(getItemTest(req.query.id));
  } catch (error) {
    res.status(404).json({ status: false, message: error.message });
  }
}
