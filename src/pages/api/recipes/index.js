import conectionDB from "../../../../lib/dbConnect";
import Recipe from "../../../../models/Recipe";

export default async function handler(req, res) {
  await conectionDB();

  const { method } = req;
  switch (method) {
    //GET
    case "GET":
      try {
        const recipe = await Recipe.find();
        if (!recipe) return res.status(404).json({ success: false });
        return res.status(201).json({ success: true, data: recipe });
      } catch (error) {
        return res.status(404).json({ success: false });
      }
    //POST
    case "POST":
      try {
        const recipe = new Recipe(req.body);
        await recipe.save();

        return res.status(200).json({ success: true, recipe });
      } catch (error) {
        return res.status(400).json({ success: false, error });
      }
    default:
      return res
        .status(500)
        .json({ success: false, error: "Falla del servidor" });
  }
}
